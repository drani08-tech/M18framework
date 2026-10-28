import {test} from '@playwright/test'
test("insert(),type()",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    await page.getByPlaceholder("Enter your name",{exact:true}).click();

    //await page.keyboard.type("jhon");

   await page.keyboard.insertText("Madhushweta");
   await page.keyboard.press("Control+A");
   await page.keyboard.press("Control+C");

   await page.keyboard.press("Tab");
  await page.keyboard.press("Control+V");

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");
  await page.keyboard.insertText("123456");


});