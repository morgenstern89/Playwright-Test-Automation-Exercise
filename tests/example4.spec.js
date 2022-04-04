const {test, expect}=require('@playwright/test');

test.describe("Examples",()=>{

    test("Testing Assertions", async({page})=>{

        await page.goto("https://demoqa.com/text-box");
        await expect(page).toHaveTitle("ToolsQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");
    

    })

})