import {test} from '@playwright/test'
import exceljs from 'exceljs'
import path from 'path'

test("from application",async({page})=>
{
    let book = new exceljs.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../ddt/excel3.xlsx"));

    let sheet = await book.getWorksheet("Sheet1");
    if(!sheet)
    {
        sheet = await book.addWorksheet("Sheet1");

    }

    await page.goto("https://www.amazon.com/");
    await page.locator('"//*[@id=""twotabsearchtextbox""]"').fill("books");
    await page.locator('"//*[@id=""sac-suggestion-row-1-cell-1""]/div[1]"').first().waitFor();

    let alldata = await page.locator('//div[.@class="s-suggestion-container"]').allTextContents();
    console.log(alldata);

    

});