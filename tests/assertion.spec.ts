import {test,expect} from '@playwright/test'

test("auto_retrying assertion",async({page})=>
{
   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
   await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1");
   await expect(page).toHaveTitle("//*[@id='demoUI']/main/section/article[1]/aside/article/aside[2]/div/div/h1");
   await page.getByPlaceholder("//*[@id='name']").fill("user");

});

test.only("Non_retrying_assertion",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let text=await page.locator('//h1[.="Register"]').textContent();
    await expect.soft(text).toBe("Regis");

    let title = await page.title();
    let url = await page.url();
    await expect(title).not.toContain("DemoApps | Qspiders");
    await expect(url).toMatch(/scenario=1/);

});

test.only("assymentric_assertion",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let text= await page.locator('//button').textContent();
    expect(text).toEqual(expect.stringContaining("Regis"));

    const product =["laptop","mobile","keyboard","mouse"];
    expect(product).toEqual(expect.arrayContaining(["laptop","mouse"]));

    const user=
    {
        name: "jhon",
        age: 25,
        city : "banglore"
    } 
    expect(user).not.toEqual(expect.objectContaining({name:"jhon",age:27}));
    
    let a = true;
    expect(a).toEqual(expect.anything());

    const user1 =
    {
        name: "jhon",
        age:25
    }
    expect(user1).toEqual({
        name:expect.anything(),
        age:expect.anything()

    })

    expect(user1).toEqual({
        name:expect.any(String),
        age:expect.any(Number)
    })

    let stud =true;
    expect(stud).toEqual(expect.any(Boolean));
    
});

