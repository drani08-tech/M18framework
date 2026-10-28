import {expect, test} from '@playwright/test'
test("frames",async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    let frame1 = await page.frameLocator('//frame[@src="frame_1.html"]');
    await frame1.locator('[name="mytext1"]').fill("hello");

    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]');
    await frame2.locator('[name="mytext2"]').fill("bye");

    let frame4 = await page.frameLocator('//frame[@src="frame_4.html"]');
    await frame4.locator('[name="mytext4"]').fill("goodmorning");

    let frame5 = await page.frameLocator('//frame[@src="frame_5.html"]');
    await frame5.locator('[name="mytext5"]').fill("goodnight");

       
});

test.only("nested frame",async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]');
    await frame3.locator('[name="mytext3"]').fill("have a good day");

    let innerframe = await frame3.frameLocator('//iframe').locator('//div[@class="AB7LabId5V1"])[2]')
    await innerframe.click();

    await expect(innerframe).toBeChecked();

});
