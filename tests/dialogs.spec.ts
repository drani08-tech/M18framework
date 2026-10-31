import {test} from '@playwright/test'


test("dialogs",async({page})=>
{
   await page.goto("https://practice.expandtesting.com/js-dialogs ");
    page.once("dialog",async(dialog)=>
    {
        await page.locator('//*[@id="js-alert"]').click();
        
    })

    
})
   

    
