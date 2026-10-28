import {test} from '@playwright/test'
test("Notifications",async({browser})=>
{
    let context = await browser.newContext(
        {
            permissions:["Notifications"]
        }
    );
    let page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.getByRole("button",{name:"Notifications",exact:true}).click();

    let result = await page.evaluate(()=>
    {
        return Notification.requestPermission();
    })
     console.log(result);
     
});

