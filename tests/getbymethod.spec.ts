import {test} from '@playwright/test'
test("getBymethods",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByLabel("name").fill("madhu");

    await page.getByPlaceholder(" email").type("drani.08@gmail.com");
    await page.getByText("register").last().click();

    await page.getByAltText("signin").click();
    await page.getByText("with Tooltip").click();

    await page.getByTitle("enter your name").fill("madhushweta");

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("textbox").first().fill("computers");

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("button",{name:'search'}).click();

    //await page.goto("http:/www.saucedemo.com");
   // await page.getByTestId("username").fill("sachin");
});



