import {test} from '@playwright/test'
test ("test1",async({page})=>
{ 
    
    await page.goto("https://www.flipkart.com/"); // viewportsize
    let size = page.viewportSize();
    console.log(size); 
});

test ("test2",async({page})=>
{
     await page.goto("https://www.flipkart.com/"); // setviewportsize
    let size1=  page.setViewportSize({width:1000,height:500});
    let size7 = page.viewportSize();
    console.log(size7);
    
});

test ("test3",async({page})=>
{
 
    await page.goto("https://www.google.com/");
    let title=await page.title();
    console.log(title);
});

test ("test4",async({page})=>
{

    await page.goto("https://www.shoppersstop.com/")
});

test ("test5",async({page})=>
{
    let url=await page.goto("https://www.shoppersstop.com/")
    console.log(url);
    
});


