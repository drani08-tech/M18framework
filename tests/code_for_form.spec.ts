import {expect, test} from '@playwright/test'
test("registeration_form",async({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form");

    await page.getByPlaceholder("First Name").fill("madhushweeta");
    await page.keyboard.press("Tab");
    await page.getByPlaceholder("Last Name").fill("D");

    await page.locator('//*[@id="userEmail"]').click();
    await page.keyboard.type("madhushweta@gmail.com");

    await page.locator('//*[@id="gender-radio-2"]').click();

    await page.getByPlaceholder("Mobile Number").click();
    await page.keyboard.type("9886365576");

    await page.locator('//*[@id="dateOfBirthInput"]').click();
    await page.keyboard.type("18/4/1993");

    await page.getByLabel('#subjectsWrapper').click();
    await page.keyboard.insertText("hi  i m madhushweta,learning automation testing");

    await page.locator('//*[@id="hobbies-checkbox-1"]').click();
    await expect(page.locator('//*[@id="hobbies-checkbox-1"]')).toBeChecked();

    await page.locator('//*[@id="hobbies-checkbox-3"]').click();
    await expect(page.locator('//*[@id="hobbies-checkbox-3"]')).toBeChecked();

    await page.locator('//*[@id="currentAddress"]').click();
    await page.keyboard.type("Banglore");

    await page.locator('//*[@id="state"]/div/div[1]/div[2]').click();
    await page.getByText("NCR").click();

    await page.keyboard.press("Tab");

    await page.locator('//*[@id="city"]/div/div[1]/div[2]').click();
    await page.getByText("Delhi").click();

    await page.locator('//*[@id="submit"]').click();


        
    



    





})