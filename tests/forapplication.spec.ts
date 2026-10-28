import {test} from '@playwright/test'
import data from "../ddt/forapplication.json"

test("for single appication",async({page})=>
{
   await page.goto("https://practicetestautomation.com/practice-test-login/");
   await page.getByLabel("Username",{exact:true}).fill("student");
   await page.getByLabel("password",{exact:true}).fill("password123");
   

});



