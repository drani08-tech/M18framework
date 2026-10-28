import {test} from '@playwright/test'
import * as excel from 'exceljs'
import * as path from 'path'

test("for applicaton",async({page})=>
{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join("/ddt/excel1.xlsx"));
    let sheet =  book.getWorksheet("sheet1");
    if(!sheet)throw new Error("sheet1 not found");


    let alldata:any[]=[];
    let headers = sheet.getRow(1).values as any[];

    let urlIndex = headers.findIndex(value=>value==="url");
    let usernameIndex=headers.findIndex(value=>value==="username");
    let  passwordIndex = headers.findIndex(value=>value==="password");

    for(let row=2;row<=sheet.actualRowCount;row++)
    {
        let url=sheet?.getRow(row).getCell(urlIndex).toString();
        let username = sheet?.getRow(row).getCell(usernameIndex).toString();
        let password = sheet?.getRow(row).getCell(passwordIndex).toString();

        alldata.push({

            link:url,
            user:username,
            password:password
        });
console.log(alldata);

for(let d of alldata)
{
    await page.goto(d.link);
    await page.getByLabel("Username",{exact:true}).fill(d.user);
    await page.getByLabel("password",{exact:true}).fill(d.password);
    await page.getByRole("button",{name:"Submit"}).click();

}

}
    });





