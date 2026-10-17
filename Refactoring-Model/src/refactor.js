from pathlib import Path
import shutil
from datetime import datetime

PROJECT = Path('Refactoring-Model')
INDEX = PROJECT / 'index.html'
REFACTOR = PROJECT / 'src' / 'refactor.js'
TESTS = PROJECT / 'tests' / 'workbench.spec.js'

for path in (INDEX, REFACTOR, TESTS):
    if not path.is_file():
        raise SystemExit(f'Missing {path}. Run this script from the repository root (the folder containing Refactoring-Model).')

html = INDEX.read_text(encoding='utf-8')
start = html.find('function cssTopLevelParts(css)')
end = html.find("$('buildAutoRefactor').addEventListener('click'", start)
if start < 0 or end < 0:
    raise SystemExit('Could not find the existing inline refactoring engine. No files changed.')

engine = "const escRe=x=>x.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\\\$&');\n" + html[start:end]
engine = engine.replace('function buildConservativeRefactor(source){', 'export function buildConservativeRefactor(source){', 1)
if 'export function buildConservativeRefactor(source)' not in engine:
    raise SystemExit('Could not export buildConservativeRefactor. No files changed.')
engine += r'''

export function buildCleanCopy(original, options = {}) {
  let source = String(original);
  if (options.removeBom) source = source.replace(/^\uFEFF/, "");
  if (options.normalizeLines) source = source.replace(/\r\n?/g, "\n");
  return buildConservativeRefactor(source).source;
}
'''

# The page keeps its existing five-tab UI; only the cleanup engine is moved to src/refactor.js.
if '<script type="module">' not in html:
    if '<script>' not in html:
        raise SystemExit('Could not find the main script tag. No files changed.')
    html = html.replace('<script>', '<script type="module">\nimport { buildConservativeRefactor } from "./src/refactor.js";', 1)
elif 'import { buildConservativeRefactor } from "./src/refactor.js";' not in html:
    html = html.replace('<script type="module">', '<script type="module">\nimport { buildConservativeRefactor } from "./src/refactor.js";', 1)

start = html.find('function cssTopLevelParts(css)')
end = html.find("$('buildAutoRefactor').addEventListener('click'", start)
if start < 0 or end < 0:
    raise SystemExit('Could not isolate the duplicate inline engine. No files changed.')
html = html[:start] + html[end:]
if 'function buildConservativeRefactor(source)' in html or 'function cssTopLevelParts(css)' in html:
    raise SystemExit('A duplicate inline engine remains. No files changed.')
if "$('buildAutoRefactor').addEventListener('click'" not in html:
    raise SystemExit('Cleanup button handler would be lost. No files changed.')

new_tests = r'''import { test, expect } from "@playwright/test";

const appUrl = "/Refactoring-Model/index.html";

test.describe("Refactoring Workbench — Chromium regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test("loads the full workbench and its main tools", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Refactoring Workbench" })).toBeVisible();
    await expect(page.locator("#htmlSource")).toBeVisible();
    await expect(page.locator("#runHtml")).toBeVisible();
    await expect(page.locator("#buildAutoRefactor")).toBeVisible();
    for (const tab of ["compare", "data", "code", "repair"]) {
      await expect(page.locator(`[data-tab="${tab}"]`)).toBeVisible();
    }
  });

  test("detects duplicate HTML IDs", async ({ page }) => {
    const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Test</title><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body><div id="duplicate">First</div><div id="duplicate">Second</div></body></html>`;
    await page.locator("#htmlSource").fill(html);
    await page.locator("#runHtml").click();
    await expect(page.locator("#htmlFindings")).toContainText("Duplicate ID");
  });

  test("does not execute scripts pasted into the audit field", async ({ page }) => {
    const html = `<!doctype html><html lang="en"><head><title>Safe</title></head><body><script>window.__uploadedScriptRan = true;</script></body></html>`;
    await page.locator("#htmlSource").fill(html);
    await page.locator("#runHtml").click();
    expect(await page.evaluate(() => window.__uploadedScriptRan)).toBeUndefined();
  });

  test("builds a separate cleaned copy without changing the source", async ({ page }) => {
    const original = `<!doctype html>
<html lang="en"><head><title>Test</title><style>.x { color: red; color: red; }</style></head><body class="x x">OK</body></html>`;
    await page.locator("#htmlSource").fill(original);
    await page.locator("#buildAutoRefactor").click();
    const source = await page.locator("#htmlSource").inputValue();
    const output = await page.locator("#repairOutput").inputValue();
    expect(source).toBe(original);
    expect(output).not.toBe("");
    expect(output).toContain('class="x"');
    expect((output.match(/color:\s*red/gi) || []).length).toBe(1);
    await expect(page.locator("#downloadRefactor")).toBeEnabled();
    await expect(page.locator("#autoRefactorStatus")).toContainText("cleaned copy");
  });

  test("src/refactor.js exports the canonical engine", async ({ page }) => {
    const result = await page.evaluate(async () => {
      const engine = await import("/Refactoring-Model/src/refactor.js");
      return engine.buildConservativeRefactor('<!doctype html><html lang="en"><head><title>T</title></head><body><!-- remove me --><p>OK</p></body></html>');
    });
    expect(result).toHaveProperty("source");
    expect(result).toHaveProperty("changes");
    expect(result.source).not.toContain("remove me");
    expect(result.changes.length).toBeGreaterThan(0);
  });
});
'''

stamp = datetime.now().strftime('%Y%m%d_%H%M%S')
for path in (INDEX, REFACTOR, TESTS):
    shutil.copy2(path, path.with_suffix(path.suffix + f'.backup_{stamp}'))

REFACTOR.write_text(engine, encoding='utf-8')
INDEX.write_text(html, encoding='utf-8')
TESTS.write_text(new_tests, encoding='utf-8')
print('Step 2 files updated locally:')
print(f'  {REFACTOR}')
print(f'  {INDEX}')
print(f'  {TESTS}')
print(f'Backups created with suffix .backup_{stamp}')
print('Next: run Playwright tests from the repository setup; review output before committing.')
