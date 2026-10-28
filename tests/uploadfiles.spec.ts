import {test} from '@playwright/test'
import path  from "path"


/*!------Apporach1:*/
test("upload_files",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("c:/Users/Lenovo/OneDrive/Desktop/HTML/mock.html");
    await page.getByRole("button",{name:"Upload Single File", exact:true}).click();
 
    await page.locator("#multipleFilesInput").setInputFiles(["c:/Users/Lenovo/Downloads/eoa (14).html","c:/Users/Lenovo/Downloads/eoa (13).html"]);
    await page.getByRole("button",{name:"Upload Multiple File",exact:true}).click();
  
});

/*rest of two approachs il not learn 

    