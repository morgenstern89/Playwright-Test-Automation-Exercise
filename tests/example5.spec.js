const { test, expect } = require("@playwright/test");

test.describe("Authentication", () => {
  test.use({
    storageState: "automationUser.json",
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.html");
  });

  test("Saving Authentication", async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.html");
    // Click input[name="username"]
    await page.locator('input[name="username"]').click();
    // Fill input[name="username"]
    await page.locator('input[name="username"]').fill("automationdemo");
    // Press Tab
    await page.locator('input[name="password"]').fill("Gmlsiddl99");
    // Press Enter
    await page.locator('input[name="password"]').press("Enter");
    await page.locator('text=Log In').click();

    await page.context().storageState({ path: "automationUser.json" });
  })

  test("Test2", async ({ page }) => {
    await page.locator('text=Bill Pay').click();
  })

  test("Test3", async ({ page }) => {
    await page.locator('text=Request Loan').click();
  })

})
