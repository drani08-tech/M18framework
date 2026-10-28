import {test} from '@playwright/test'
test("multiple tabs",async({browser})=>
{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.locator('(//input[@class="nw1UBF v1zwn26"])').fill("shoes");
    await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click();

    let [page2]= await Promise.all([page.waitForEvent("popup"),
        page.locator('(//img[@class="MZeksS"])').click(); ])

        await page2.locator()

    
})