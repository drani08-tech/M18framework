import {test} from '@playwright/test'

test.use({
    actionTimeout:20000
})

test('autowaits',async({page})=>
{
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator('//*[@id="username"]').fill("student");
  await page.locator('//*[@id="password"]').fill("Passward123");
  await page.locator('//*[@id="submit"]').click();

});

test('auto waits1',async({page})=>
{
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator('//*[@id="username"]').fill("student");
  await page.getByLabel('//*[@id="pass"]').fill("Passward123");
  await page.getByRole('button',{name:"Submit",exact:true}).click();

});