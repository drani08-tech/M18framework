import {test,expect} from '@playwright/test'
test("searching shoe",async({page})=>
{
    await page.goto("https://www.amazon.com/");
    
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");

    await page.locator('//input[@id="nav-search-submit-button"]').click();

    let name = await page.locator('//div[@data-component-type="s-search-result"]//h2)[1]').textContent();
    let price = await page.locator('(//span[@class="a-offscreen"])[1]').textContent();

    console.log(name);
    console.log(price);

  

});
