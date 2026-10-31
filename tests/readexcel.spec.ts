import {test} from '@playwright/test';
import  excel from 'exceljs'
import path from 'path'



test("read excel",async()=>
{
  let workbook = new excel.Workbook();
  await workbook.xlsx.readFile(path.join(__dirname,'..','ddt','excel.xlsx'));
  
  let sheet = workbook.getWorksheet(1);
  sheet?.eachRow((row)=>
{
    console.log(row.getCell(1).value);
    
});

 let sheet1= workbook.getWorksheet(1);
  sheet1?.eachRow((row1)=>
{
    console.log(row1.getCell(2).value);
    
});

 let sheet2 = workbook.getWorksheet(1);
  sheet2?.eachRow((row2)=>
{
    console.log(row2.getCell(3).value);
    
});
    
});


test("multiple_values",async()=>
{
  let book = new excel.Workbook();
  await book.xlsx.readFile(path.join(__dirname,"ddt\excel.xlsx"))
  })