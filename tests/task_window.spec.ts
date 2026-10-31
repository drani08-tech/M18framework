import {test,expect} from '@playwright/test'
test("task on window handling",async({browser})=>
{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1");
    
    let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button",{name:"view more"}).first().click()

    ])
    await page.getByRole("button",{name:"Add to Cart"}).click();

    let cartele = await page2.locator('//article').last();

    let cartcount = parseInt(await cartele.textContent() || "0");

    await expect(cartcount).toBeGreaterThan(0);


});


