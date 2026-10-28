import {test} from '@playwright/test'
test("task on keyboard actions",async({page})=>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('//*[@id="username"]').fill("student");

    await page.keyboard.up("Space");
    await page.keyboard.down("Space");
    
     await page.keyboard.insertText("stud");

     await page.keyboard.press("Controll+A");
     await page.keyboard.press("Control+C");

     await page.keyboard.press("Tab");
     await page.keyboard.press("Control+V");

     await page.locator('//*[@id="submit"]').click();


});