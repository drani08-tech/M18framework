import {test} from '@playwright/test'
import {readExcel} from "../utilities/excelUtility"
import {getRowValues} from "../utilities/excelUtility"

test("excel utilities",async()=>
{
    let value1 = await getRowValues("..//ddt/excel.xlsx","Sheet3")
    console.log(value1);
    

})