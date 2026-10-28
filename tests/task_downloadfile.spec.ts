import { expect,test } from "@playwright/test"
import path from "path"
import fs from "fs"

test("genrate and download file",async({page})=>
{
    await page.goto("https://demo.automationtesting.in/FileDownload.html")
    await page.locator('//*[@id="textbox"]').fill("my downloaded file");
    await page.getByRole("button",{name:"genrate file"}).click();
    
   

    let [download] = await Promise.all(
        [
           page.waitForEvent("download"),
           page.getByRole("link",{name:"Download"}).click()

        ]
    );

let filePath =path.join("file:///C:/Users/Lenovo/Downloads/samplefile.pdf",download.suggestedFilename());
await download.saveAs(filePath);

expect(download.suggestedFilename()).toBe("info.txt");
expect(fs.readFileSync(filePath,"utf-8")).toContain("my downloaded file");
    
});



