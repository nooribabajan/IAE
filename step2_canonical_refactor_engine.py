#!/usr/bin/env python3
"""Step 2: make Refactoring-Model/src/refactor.js the canonical cleanup engine.

Run from the IAE repository root:
    python3 step2_canonical_refactor_engine.py .

The script makes backups before editing and aborts before writing if its expected
Step 1 layout is not present.
"""
from __future__ import annotations

import argparse
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

ENGINE_NAMES = [
    "cssTopLevelParts",
    "dedupeCssDeclarations",
    "refactorTopLevelCss",
    "compactJsonWhitespace",
    "cleanHtmlShell",
    "refactorInlineJs",
    "buildConservativeRefactor",
]

# The functions in this list are top-level declarations in the extracted
# workbench.js. Their boundaries are identified by the next top-level
# declaration/call-site marker, not by matching braces inside JavaScript text.
BOUNDARY_RE = re.compile(
    r"(?m)^(?=(?:function\s+[A-Za-z_$][\w$]*\s*\(|"
    r"(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=|"
    r"\$\s*\(|document\.|window\.|export\s+))"
)


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(2)


def extract_top_level_declaration(source: str, name: str) -> tuple[int, int, str]:
    pattern = re.compile(rf"(?m)^function\s+{re.escape(name)}\s*\(")
    match = pattern.search(source)
    if not match:
        fail(f"Could not find top-level function {name}() in src/workbench.js. Run Step 1 first.")
    start = match.start()
    boundary = BOUNDARY_RE.search(source, match.end())
    end = boundary.start() if boundary else len(source)
    chunk = source[start:end].rstrip()
    if not re.search(r"\}\s*$", chunk):
        fail(f"Could not safely identify the end of {name}(); no closing brace before the next top-level declaration.")
    return start, end, chunk


def extract_esc_re(source: str) -> str:
    # This constant is also used by the analyzer in workbench.js, so retain it
    # there and make a private copy in the canonical engine module.
    match = re.search(r"(?m)^\s*const\s+escRe\s*=.*?(?:;\s*)?$", source)
    if not match:
        fail("Could not find the escRe helper in src/workbench.js.")
    return match.group(0).strip()


def replace_function_signature(function_source: str) -> str:
    pattern = r"^function\s+buildConservativeRefactor\s*\(\s*source\s*\)\s*\{"
    replacement = "export function buildConservativeRefactor(source, options = {}) {"
    updated, count = re.subn(pattern, replacement, function_source, count=1, flags=re.M)
    if count != 1:
        fail("Could not convert buildConservativeRefactor(source) into an exported canonical function.")
    basic_branch = r'''
  // Compatibility mode for the older src/app.js controls. The normal workbench
  // path omits mode and receives the full conservative refactoring pipeline.
  if (options.mode === "basic") {
    let basicOutput = String(source ?? "");
    const basicChanges = [];
    if (options.removeBom && basicOutput.startsWith("\uFEFF")) {
      basicOutput = basicOutput.slice(1);
      basicChanges.push("Removed byte-order mark");
    }
    if (options.normalizeLines) {
      const normalized = basicOutput.replace(/\r\n?/g, "\n");
      if (normalized !== basicOutput) basicChanges.push("Normalized line endings");
      basicOutput = normalized;
    }
    return { source: basicOutput, changes: basicChanges };
  }
'''
    # The raw string above intentionally carries literal JS backslashes.
    updated = re.sub(
        r"(export function buildConservativeRefactor\(source, options = \{\}\) \{)",
        lambda match: match.group(1) + basic_branch,
        updated,
        count=1,
    )
    return updated


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repo_root", nargs="?", default=".", help="Local IAE repository root (default: current directory)")
    args = parser.parse_args()
    root = Path(args.repo_root).resolve()
    model = root / "Refactoring-Model"
    workbench_path = model / "src" / "workbench.js"
    refactor_path = model / "src" / "refactor.js"
    app_path = model / "src" / "app.js"
    readme_path = model / "README.md"
    tests_path = model / "tests" / "workbench.spec.js"

    expected = [workbench_path, refactor_path, app_path, readme_path, tests_path]
    missing = [str(p.relative_to(root)) for p in expected if not p.is_file()]
    if missing:
        fail("Expected Step 1 files are missing: " + ", ".join(missing) + ". Run Step 1 first, from the IAE root.")

    workbench = workbench_path.read_text(encoding="utf-8")
    refactor_old = refactor_path.read_text(encoding="utf-8")
    app_old = app_path.read_text(encoding="utf-8")
    readme_old = readme_path.read_text(encoding="utf-8")
    tests_old = tests_path.read_text(encoding="utf-8")

    if 'import { buildConservativeRefactor } from "./refactor.js";' in workbench:
        fail("workbench.js already imports the canonical engine; Step 2 appears to have been applied already.")
    if "function buildConservativeRefactor" not in workbench:
        fail("src/workbench.js does not contain the Step 1 engine. Run Step 1 before Step 2.")
    if "buildCleanCopy" not in app_old:
        fail("src/app.js does not match the expected pre-Step-2 version; refusing to guess how to rewrite it.")

    # Collect exact declaration ranges first. This keeps the original file
    # untouched if any required helper cannot be located.
    declarations: dict[str, tuple[int, int, str]] = {}
    for name in ENGINE_NAMES:
        declarations[name] = extract_top_level_declaration(workbench, name)
    esc_re = extract_esc_re(workbench)

    # Build a refactor module with private helpers and one exported engine.
    function_parts = [declarations[name][2] for name in ENGINE_NAMES]
    canonical_engine = "\n\n".join(function_parts)
    canonical_engine = replace_function_signature(canonical_engine)
    refactor_new = (
        "// Canonical cleanup/refactoring engine. UI modules should delegate here.\n"
        + esc_re + "\n\n"
        + canonical_engine.strip() + "\n"
    )

    # Remove engine declarations from the workbench in descending-offset order.
    workbench_new = workbench
    for name in sorted(ENGINE_NAMES, key=lambda n: declarations[n][0], reverse=True):
        start, end, _ = declarations[name]
        workbench_new = workbench_new[:start] + workbench_new[end:]
    workbench_new = re.sub(r"\n{3,}", "\n\n", workbench_new).lstrip()
    workbench_new = 'import { buildConservativeRefactor } from "./refactor.js";\n\n' + workbench_new

    # The legacy app's checkbox options are retained, but all cleanup now
    # delegates to the canonical module.
    app_new = re.sub(
        r'import\s*\{\s*buildCleanCopy\s*\}\s*from\s*["\']\./refactor\.js["\'];?',
        'import { buildConservativeRefactor } from "./refactor.js";',
        app_old,
        count=1,
    )
    if app_new == app_old or "buildCleanCopy" not in app_old:
        fail("Could not safely replace the buildCleanCopy import in src/app.js.")
    app_new, call_count = re.subn(
        r"buildCleanCopy\(\s*originalText\s*,\s*options\s*\)",
        'buildConservativeRefactor(originalText, { ...options, mode: "basic" })',
        app_new,
    )
    if call_count != 1:
        fail(f"Expected one buildCleanCopy(originalText, options) call in src/app.js; found {call_count}.")
    if "buildCleanCopy" in app_new:
        fail("buildCleanCopy remains in src/app.js after attempted migration; refusing to write partial changes.")

    readme_section = '''\n\n## Canonical cleanup engine\n\n`src/refactor.js` is the single source of truth for cleanup transformations. It exports `buildConservativeRefactor(source, options)`. The active browser workbench in `src/workbench.js` imports and calls that engine rather than maintaining a second copy of the transformations. The older `src/app.js` entry point also delegates to the same engine in `basic` compatibility mode so its BOM and line-ending checkboxes continue to work.\n'''
    if "## Canonical cleanup engine" not in readme_old:
        readme_new = readme_old.rstrip() + readme_section
    else:
        readme_new = readme_old

    architecture_test = r'''

test("cleanup transformations have one canonical implementation", async () => {
  const { readFile } = await import("node:fs/promises");
  const refactorSource = await readFile(new URL("../src/refactor.js", import.meta.url), "utf8");
  const workbenchSource = await readFile(new URL("../src/workbench.js", import.meta.url), "utf8");
  const appSource = await readFile(new URL("../src/app.js", import.meta.url), "utf8");

  expect(refactorSource).toContain("export function buildConservativeRefactor");
  expect(workbenchSource).toContain('from "./refactor.js"');
  expect(workbenchSource).not.toMatch(/^function\s+buildConservativeRefactor/m);
  expect(appSource).toContain("buildConservativeRefactor");
  expect(appSource).not.toContain("buildCleanCopy");
});
'''
    if "cleanup transformations have one canonical implementation" not in tests_old:
        # Insert immediately before the final test.describe closure when present;
        # otherwise append as a top-level Playwright test.
        describe_close = re.search(r"(?m)^\}\);\s*$", tests_old)
        if describe_close:
            tests_new = tests_old[:describe_close.start()] + architecture_test.replace("\\n", "\n").lstrip("\n") + "\n" + tests_old[describe_close.start():]
        else:
            tests_new = tests_old.rstrip() + architecture_test.replace("\\n", "\n")
    else:
        tests_new = tests_old

    # Sanity checks before any filesystem writes.
    if "function buildConservativeRefactor" in workbench_new:
        fail("The workbench still defines the engine after extraction; refusing to write.")
    if 'import { buildConservativeRefactor } from "./refactor.js";' not in workbench_new:
        fail("The workbench canonical import was not installed; refusing to write.")
    if "export function buildConservativeRefactor" not in refactor_new:
        fail("The canonical export is missing; refusing to write.")
    if "buildCleanCopy" in app_new:
        fail("The legacy app still references buildCleanCopy; refusing to write.")

    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_dir = model / ".step2-backup" / stamp
    backup_dir.mkdir(parents=True, exist_ok=False)
    for path in [workbench_path, refactor_path, app_path, readme_path, tests_path]:
        shutil.copy2(path, backup_dir / path.name)

    updates = {
        workbench_path: workbench_new,
        refactor_path: refactor_new,
        app_path: app_new,
        readme_path: readme_new,
        tests_path: tests_new,
    }
    try:
        for path, content in updates.items():
            path.write_text(content, encoding="utf-8")
    except Exception:
        # Restore all five files if a write fails midway.
        for path in [workbench_path, refactor_path, app_path, readme_path, tests_path]:
            backup = backup_dir / path.name
            if backup.exists():
                shutil.copy2(backup, path)
        fail(f"A write failed. Original files were restored from {backup_dir}.")

    print("Step 2 applied successfully.")
    print("Canonical engine: Refactoring-Model/src/refactor.js")
    print("Updated files:")
    for path in updates:
        print(f"  - {path.relative_to(root)}")
    print(f"Backups: {backup_dir.relative_to(root)}")
    print("Browser tests have NOT been run by this script.")
    print("Next: cd Refactoring-Model && npx playwright test")


if __name__ == "__main__":
    main()
