import {test} from '@playwright/test'
test("css selctor",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("[id='name']").fill("madhushweta");
    await page.locator("//*[@id='email']").fill("madhushweta@gmail.com");

    await page.goto("https://support.saucelabs.com/s/login/?language=en_US");
    await page.locator("//*[@id='184:0']").fill("drani.08@gmail.com");
    await page.locator("//*[@id='input-6']").fill("12345");


});

