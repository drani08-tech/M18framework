import {test} from '@playwright/test'
 
/*test("explicit_waits",async({page})=>
{
    await page.goto("https://www.amazon.com/");
    await page.getByPlaceholder('Search Amazon.in',{exact:true}).fill("shoes");
    await page.locator(".s-suggestion-co").first().waitFor({timeout:20000,state:'detached'});

    let suggestion = await page.locator(".s-suggestion-container").allTextContents();
})

test.only("waitfor_navigation",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    //await Promise.all(
       // [
          //page.waitForNavigation(),
        //  page.getByText("Check Box",{exact:true}).click()
      //  ])

    await Promise.all([
        page.waitForURL("https://demoapps.qspiders.com/ui/checkbox")
        page.getByText("Check Box").click()
    ])
       
    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
});

test.only("custom_waits",async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.waitForFunction(()=>
    {
        return document.readyState=== "complete";

    })

    await page.getByPlaceholder("#twotabsearchtextbox")
})*/

/*test("multiselector_dropdown",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    await page.locator("select-multiple-native").selectOption({value:'//*[@id="select-multiple-native"]/option[1]'},{value:'//*[@id="select-multiple-native"]/option[2]'},{value:'//*[@id="select-multiple-native"]/option[3]'});
    await page.locator('//*[@id="demoUI"]/main/section/article[1]/aside/div/div/div/div/div[2]/button').click();

});*/
 
test.only("custom_dropdown",async({page})=>
{
    await page.goto("https://www.amazon.com/s?k=shoe&crid=W9EXTJ3PTLUV&sprefix=%2Caps%2C415&ref=nb_sb_ss_recent_3_0_recent");
    await page.locator('#a-autoid-0-announce').click();
    await page.locator('//*[@id="s-result-sort-select_1"]').click();
    await page.locator('//*[@id="s-result-sort-select_5"]').click();
    

});


