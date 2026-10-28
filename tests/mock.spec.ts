import {test} from '@playwright/test'
test("mock",async({browser})=>
{  
    const context = await browser.newContext();
    const  page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

 

});

test.only("mock1",async({browser})=>
{
    const  page = await browser.newPage();
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    
});