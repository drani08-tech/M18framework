import {test} from '@playwright/test'
import * as exceljs from 'exceljs'
import * as path from 'path'

test("writing data in excel",async()=>
{
    let book = new exceljs.Workbook();
    await book.xlsx.readFile(__dirname,"../ddt/excel2.xlsx");

    let sheet = await book.getWorkbook("sheet1");
    if(!sheet)
    {
        sheet = await book.addWorksheet("sheet1");

    }

    sheet.getRow(1).getCell(1).value = "playwright";
    await book.xlsx.writeFile(path.join(__dirname,"../ddt/excel2.xlsx"));


});