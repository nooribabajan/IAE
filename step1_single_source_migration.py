#!/usr/bin/env python3
"""Apply Step 1 to a checkout of nooribabajan/IAE at the specified commit.

The script moves the current workbench's inline application JavaScript into
src/workbench.js, loads it as an ES module, fixes the Playwright tests to target
the actual current UI, and updates the README to describe that architecture.
It refuses to run if the checkout does not look like the expected workbench.
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

EXPECTED_COMMIT = "583b7a26c620a7fc7ab733665b6af1c1a901d114"

TESTS = r'''import { test, expect } from "@playwright/test";

const appUrl = "/Refactoring-Model/index.html";

test.describe("Refactoring Workbench — Chromium regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test("loads the actual workbench interface", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Refactoring Workbench" }).first()
    ).toBeVisible();
    await expect(page.locator("#htmlSource")).toBeVisible();
    await expect(page.locator("#runHtml")).toBeVisible();
    await expect(page.locator("#buildAutoRefactor")).toBeVisible();
    await expect(page.locator("#repairOutput")).toBeVisible();
  });

  test("analyzes pasted HTML without executing its scripts", async ({ page }) => {
    const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Safe input</title></head>
<body>
  <div id="duplicate">First</div>
  <div id="duplicate">Second</div>
  <script>window.__uploadedScriptRan = true;</script>
</body>
</html>`;

    await page.locator("#htmlSource").fill(html);
    await page.locator("#runHtml").click();
    await expect(page.locator("#htmlFindings")).toContainText(/duplicate/i);
    expect(await page.evaluate(() => window.__uploadedScriptRan)).toBeUndefined();
    await expect(page.locator("#downloadHtmlReport")).toBeEnabled();
  });

  test("creates a separate output and preserves the input", async ({ page }) => {
    const original = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Cleanup test</title></head>
<body><main>Keep this content</main></body></html>`;
    await page.locator("#htmlSource").fill(original);
    await page.locator("#buildAutoRefactor").click();

    expect(await page.locator("#htmlSource").inputValue()).toBe(original);
    const output = await page.locator("#repairOutput").inputValue();
    expect(output.length).toBeGreaterThan(0);
    expect(output).toContain("Keep this content");
    await expect(page.locator("#autoRefactorStatus")).not.toContainText("Error");
  });
});
'''

README = r'''# Refactoring Workbench

A local-first HTML inspection and conservative cleanup tool.

## Run

Serve the repository root over HTTP, then open
`/Refactoring-Model/index.html`. For example, from the repository root:

```sh
python3 -m http.server 8000
```

The current workbench interface is `index.html`; its application JavaScript is
kept in `src/workbench.js` and loaded as an ES module. `src/app.js` and
`src/analyzer.js` are legacy modules and are not entry points for this UI.

## Safety model

The original input is not overwritten by the cleanup action. The workbench
builds a separate output copy for review and download. HTML analysis uses
`DOMParser` for advisory findings; parsing may repair malformed markup in
memory, but that parsed DOM is not used to generate the cleaned output.

Cleanup rules are conservative. Findings are heuristics, not a complete
validator or security audit. Review generated output and test the target page
before replacing a production file.

## Regression tests

Install dependencies and run the Chromium suite:

```sh
npm install
npx playwright install chromium
npm run test:chromium
```

Tests target the current interface (`htmlSource`, `runHtml`,
`buildAutoRefactor`, and `repairOutput`), rather than the obsolete `unified*`
controls that are not present in the current `index.html`.
'''

def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 step1_single_source_migration.py /path/to/IAE", file=sys.stderr)
        return 2
    root = Path(sys.argv[1]).resolve()
    app = root / "Refactoring-Model"
    html_path = app / "index.html"
    tests_path = app / "tests" / "workbench.spec.js"
    readme_path = app / "README.md"
    module_path = app / "src" / "workbench.js"
    for path in (html_path, tests_path, readme_path):
        if not path.is_file():
            raise SystemExit(f"Required file missing: {path}")

    html = html_path.read_text(encoding="utf-8")
    for marker in ('id="htmlSource"', 'id="buildAutoRefactor"', 'id="repairOutput"'):
        if marker not in html:
            raise SystemExit(f"Expected workbench control not found: {marker}; no files changed")
    if module_path.exists():
        raise SystemExit(f"Refusing to overwrite existing module: {module_path}; no files changed")

    # Locate the current inline app script. Fail closed if script layout is ambiguous.
    matches = list(re.finditer(r"<script\s*>([\s\S]*?)</script\s*>", html, re.IGNORECASE))
    if len(matches) != 1:
        raise SystemExit(f"Expected exactly one inline application script, found {len(matches)}; no files changed")
    match = matches[0]
    js = match.group(1).strip() + "\n"
    if "function buildConservativeRefactor" not in js:
        raise SystemExit("Expected cleanup engine not found in inline script; no files changed")

    replacement = '<script type="module" src="./src/workbench.js"></script>'
    updated_html = html[:match.start()] + replacement + html[match.end():]
    if "src/workbench.js" not in updated_html or "function buildConservativeRefactor" not in js:
        raise SystemExit("Internal validation failed; no files changed")

    # Prepare every output before writing, then write only the four intended files.
    module_path.parent.mkdir(parents=True, exist_ok=True)
    module_path.write_text(js, encoding="utf-8", newline="\n")
    html_path.write_text(updated_html, encoding="utf-8", newline="\n")
    tests_path.write_text(TESTS, encoding="utf-8", newline="\n")
    readme_path.write_text(README, encoding="utf-8", newline="\n")

    print("Step 1 applied to these files:")
    for p in (html_path, module_path, tests_path, readme_path):
        print(f"  {p.relative_to(root)}")
    print("Structural validation passed. Browser regression tests still need to be run:")
    print("  cd Refactoring-Model && npm run test:chromium")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
