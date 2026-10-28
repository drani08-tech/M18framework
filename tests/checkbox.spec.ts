import {test} from '@playwright/test'
test ("check_box and radio_button",async({page})=>
{
    //await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.locator("#domain-a").check();
     await page.locator("#domain-b").check();
     await page.locator("#domain-a").uncheck();
    

});
