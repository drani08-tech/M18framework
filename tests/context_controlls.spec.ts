import {test,chromium} from '@playwright/test'

test ("context_cookies",async({context,page})=>
{
    await page.goto("https://www.amazon.com/");
    let cookies=await context.cookies();
    console.log(cookies);

    
    
});

test ("chromium_launch",async()=>
{
   let browser = await chromium.launch();
   let context= await browser.newContext();
   let page = await context.newPage();
   await page.goto("https://www.flipkart.com/");
   browser.close();

});

test.only("ss",async({page})=>
{
   await page.goto("https://www.youtube.com/");
   await page.screenshot({path:"flipkart.png"});
   

});



