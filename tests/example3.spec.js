const {test, expect}=require('@playwright/test');

test.describe("Examples",()=>{

    test("Testing Selectors", async({page})=>{
        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");
        await page.locator('#userEmail').type("test@gmail.com");
        await page.locator('[placeholder="Current Address"]').type("test");
        await page.locator('#permanentAddress').type("test");
        await page.locator('button:has-text("Submit")').click();

        await page.pause();
        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:test@gmail.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText("Current Address :test");
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText("Permananet Address :test");
    
    
    })



})