import {expect,test} from '@playwright/test'
import path from "path"
import fs from "fs"

test("download file",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("my downloaded file");
    await page.locator("#fileName").fill("newfile.txt");

    let [downloadedfile] = await Promise.all(
        [
            page.waitForEvent("download"),
            page.getByRole("button",{name:"download"})
        ]
    )

})