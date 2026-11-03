import {test} from '@playwright/test'
import * as exceljs from 'exceljs'
import * as path from 'path'

test("writing data in excel",async()=>
{
    let book = new exceljs.Workbook();
    await path.join(__dirname,"../ddt/excel2.xlsx");

    let sheet =  book.getWorksheet("sheet1");
    if(!sheet)
    {
        sheet = book.addWorksheet("sheet1");

    }

    sheet.getRow(1).getCell(1).value = "playwright";
    await book.xlsx.writeFile(path.join(__dirname,"../ddt/excel2.xlsx"));


});