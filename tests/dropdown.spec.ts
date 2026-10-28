import {test} from '@playwright/test'
test("dropdowns",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown");

    await page.locator("#select3").selectOption({value:"India"});
    await page.locator("#select5").selectOption({value:"Karnataka"});
    await page.locator('//*[@id="demoUI"]/main/section/article[1]/aside/div/div/section[2]/section/form/article/section[3]/div/div[3]/div/select').selectOption({value:"Gadag"});

});
