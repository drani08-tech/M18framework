import {test} from '@playwright/test'
test("test1",async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder('Search amazon.in',{exact:true}).fill("shoes");

    let text= await page.locator('.s-suggestion-container').nth(9).textContent();
    console.log(text);

    await page.locator('.s-suggestion-container').first().waitFor();
    let text1= await page.locator('.s-suggestion-container').allTextContents();
    console.log(text1);
 
    
});

test.only("test2",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('#name').waitFor();

    let res= await page.locator('#name').isVisible();
    console.log(res);

    let res1= await page.locator('#name').isEnabled();
    console.log(res1);

    let res2= await page.locator('#name').isEditable();
    console.log(res2);

    let res3= await page.locator('#name').isDisabled();
    console.log(res3);

    let res4= await page.locator('#name').isChecked();
    console.log(res4);
    
    
});
