import {test} from '@playwright/test'
test ("fixtures",async({context})=>
{     
    const page = await context.newPage();
    await page.goto("https://www.amazon.com/")
    
})