const {test, expect} =require('@playwright/test') ;

test('test', async({page})=>{  
  // Click .card-up >> nth=0
  await page.locator('.card-up').first().click();
  // assert.equal(page.url(), 'https://demoqa.com/elements');

  // Click li:has-text("Text Box")
  await page.locator('li:has-text("Text Box")').click();
  // assert.equal(page.url(), 'https://demoqa.com/text-box');

  // Click [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').click();

  // Fill [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').fill('test');

  // Press Tab
  await page.locator('[placeholder="Full Name"]').press('Tab');

  // Fill [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').fill('test@gmail.com');

  // Press Tab
  await page.locator('[placeholder="name\\@example\\.com"]').press('Tab');

  // Fill #currentAddress
  await page.locator('#currentAddress').fill('test');

  // Press Tab
  await page.locator('#currentAddress').press('Tab');

  // Fill #permanentAddress
  await page.locator('#permanentAddress').fill('test');

  // Press Tab
  await page.locator('#permanentAddress').press('Tab');

  // Click text=Submit
  await page.locator('text=Submit').click();
})