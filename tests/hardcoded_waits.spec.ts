import {test,expect} from '@playwright/test'
test("hard_coded_waits",async({page})=>
{
    await page.waitForTimeout(2000);
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.waitForTimeout(2000);
    await page.locator('//input[@id="username"]').fill("student");

    await page.waitForTimeout(2000);
    await page.locator('#password').fill("Password123");

    await page.waitForTimeout(2000);
    await page.locator('//*[@id="submit"]').click();
    await page.waitForTimeout(2000);
});
