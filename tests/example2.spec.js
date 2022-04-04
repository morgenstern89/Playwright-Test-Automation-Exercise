const { test, expect } = require("@playwright/test");

test.describe.parallel("Smoke Tests", () => {
    
    test.beforeEach(async ({page})=>{
        await page.goto("/");
    })

    test.afterEach(async({page})=>{

        console.log("This test is finished.");
    })

test("Simple click test", async ({ page, browserName }) => {
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
  }),

  test("Duplicate Test 1", async ({ page }) => {
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
  }),

  test("Duplicate Test 2", async ({ page }) => {
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
  })


//   test("First Test @test-regression", async ({ page }) => {
//     //Write testing code here
//     await page.goto("https://playwright.dev");
//     const title = page.locator(".navbar__inner .navbar__title");
//     await expect(title).toHaveText("Playwright");
//   })

//   test.only("Simple click test", async ({ page, browserName }) => {
//     await page.goto("https://the-internet.herokuapp.com");
//     await page.click("text=Add/Remove Elements");
//     const locator1=page.locator('text=Add/Remove Elements');
//     await locator1.screenshot({path:"screenshot2.png"});
//     await page.click("text=Add Element");
//   })


});

