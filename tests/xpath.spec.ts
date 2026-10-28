import {test} from '@playwright/test'
test ("xpath",async({page})=>
 {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("//input[@id='username']").fill("student");
    await page.locator("//input[@id='password']").fill("Password123");
    await page.locator("//button[@id='submit']").click();

    await page.goto("https://www.flipkart.com/");
    await page.locator("//button//*[@id='Cart']/div/div[2]").click();
 }
);