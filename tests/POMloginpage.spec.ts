import {test} from '@playwright/test'
import Login  from '../pageobjectmodel/loginpage.page'
import value from "../ddt/forapplication.json"

test("POM login page",async({page})=>
{
    let loginpage = new Login(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await loginpage.txtUsername.fill("student");
    await loginpage.txtPassword.fill("Password123");
    await loginpage.BtnSubmit.click();

});

test.only("pom method",async({page})=>
{
    for(let testdata of value)
    {
        let Loginpage = new Login(page)
        await Loginpage.loginMethod(testdata.url,testdata.username,testdata.password);
        

    }
})
