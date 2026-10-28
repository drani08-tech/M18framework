//Amazon-Samsangphones get price of 1st phone

import {test} from '@playwright/test'
test.only("amazon_samsang", async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.locator('//*[@id="twotabsearchtextbox"]').fill("samsang phones");
    await page.keyboard.press("Enter");

    let price= await page.locator('.a-price-whole').first().innerText();
    console.log(price);
       

});

//Amazone - Android 13.0 checkbox

  /*test.only("amazone_android",async({page})=>

{
    await page.goto("https://www.amazon.com/");
    await page.locator('//*[@id="twotabsearchtextbox"]').fill("Android 13.0 phones");
    await page.keyboard.press("Enter");
    await page.locator('//*[@id="p_n_g-1003517064111/36816631011"]/span/a/div/label/input').click();

          page.close();
    

});*/

//Cricbuzz- find runs scored by a particular batsman 
//examplr- virat kohli

 /*test.only("cricbuzz",async({page})=>
{
    await page.goto("https://www.cricbuzz.com/");
    await page.locator('//a[contains(.,"Live Cricket Score")]').click();
    await page.locator('//a[contains(.,"Scorecard")]').click();
     let runs = await page.locator('//div[normalize-space()="Virat Kohli"]/following-sibling::div[contains(@class,"cb-col")][1]').textContent();
     console.log(runs);

     
});*/

//ICC Rankings - David Warner rating 
test.only("icc_ranking",async({page})=>
{
    await page.goto("https://www.icc-cricket.com/");
    await page.locator('').click();

    let rating = await page.locator('//tr[.//*[normalize-space()="David Warner"]]//td[last()]').textContent();
    console.log(rating);
    

});



