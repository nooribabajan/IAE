
import { test, expect } from "@playwright/test";

const appUrl = "/Refactoring-Model/index.html";

test.describe("Refactoring Workbench — Chromium regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test("loads the workbench successfully", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Refactoring Workbench" }).first()
    ).toBeVisible();

    await expect(page.locator("#unifiedFile")).toBeVisible();
    await expect(page.locator("#unifiedSource")).toBeVisible();
    await expect(page.locator("#runUnified")).toBeVisible();
  });

  test("detects HTML and reports duplicate IDs", async ({ page }) => {
    const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Test</title></head>
<body>
  <div id="duplicate">First</div>
  <div id="duplicate">Second</div>
</body>
</html>`;

    await page.locator("#unifiedSource").fill(html);

    await expect(page.locator("#unifiedType")).toHaveValue(
      "HTML document"
    );

    await page.locator("#runUnified").click();

    await expect(page.locator("#unifiedStatus")).toContainText(
      "Completed"
    );
    await expect(page.locator("#unifiedResults")).toContainText(
      "Duplicate ID"
    );
  });

  test("does not execute scripts inside the uploaded HTML", async ({
    page
  }) => {
    const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Safe input</title></head>
<body>
  <script>
    window.__uploadedScriptRan = true;
  </script>
</body>
</html>`;

    await page.locator("#unifiedFile").setInputFiles({
      name: "untrusted.html",
      mimeType: "text/html",
      buffer: Buffer.from(html)
    });

    await expect(page.locator("#unifiedType")).toHaveValue(
      "HTML document"
    );

    expect(
      await page.evaluate(() => window.__uploadedScriptRan)
    ).toBeUndefined();
  });

  test("creates a cleaned copy without changing the source", async ({
    page
  }) => {
    const original =
      "\uFEFF<!doctype html>\n<html lang=\"en\"><head><title>Test</title></head><body>OK</body></html>";

    await page.locator("#unifiedSource").fill(original);

    await page.locator(
      'input[name="unifiedOp"][value="clean"]'
    ).check();

    await page.locator("#runUnified").click();

    await expect(page.locator("#unifiedStatus")).toContainText(
      "Completed"
    );

    const source = await page.locator("#unifiedSource").inputValue();
    const output = await page.locator("#unifiedOutput").inputValue();

    expect(source.startsWith("\uFEFF")).toBe(true);
    expect(output.startsWith("\uFEFF")).toBe(false);
    expect(output).toContain("<!doctype html>");
    await expect(page.locator("#downloadUnifiedOutput")).toBeEnabled();
  });
});
