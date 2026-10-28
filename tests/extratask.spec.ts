//example goto amazon search laptop verify the result page title contains laptop.

/*test("search for laptop",async({page})=>
{
  await page.goto("https://www.amazon.com/");
  await page.locator('//*[@id="twotabsearchtextbox"]').fill("laptop");
  await page.keyboard.press("Enter");
  await expect(page).toHaveTitle(/laptop/i);
  await page.close();

});*/

import {test,expect} from '@playwright/test'
test.only("non retrying assertion",async({page})=>
{
  await page.goto("https://demoapps.qspiders.com/ui?scena  rio=1");
  
  let text = await page.locator('//h1[.="Register"]').textContent();
  await expect(text).toBe("Register");

  let title = await page.title();
  let url = await page.url();
  
  await expect(title).toContain("DemoApps | Qspiders");
  await expect(url).toMatch(/scenario=1/);

  let status = "h1";
  await expect(status).toBeTruthy();

  let name = "rahul";
  await expect(name).toBeDefined();

});




