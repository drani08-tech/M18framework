import {test,expect} from '@playwright/test'
test.only("poll_assertion",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect.poll(async()=>
    {
        return await page.title()
    },"poll assertion").toContain("demo");
});