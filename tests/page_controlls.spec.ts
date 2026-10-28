//ex:1
import {test} from '@playwright/test'
test("test1",async({page})=>
{
   
   page.goto("https://demoapps.qspiders.com/ui/login?scenario=1");
   test.slow();
     
    
});
    

test.skip ("test2",async({page})=>
{
    console.log("test2");
    
});

test.only("test3",async({page})=>
{
    console.log("test3");
    
});

test.fail ("test4",async({page})=>
    
{
    //console.log("test4");
    page.goto("https://www.amazon.com/")
    
});

test.fixme ("test5",async({page})=>

{
     page.goto("https://www.amazon.com/")
    
    
});

test ("test6", async({page})=>
{
     page.goto("https://www.myntra.com/");
     test.slow();
    
    
});

test.describe("logintest",()=>
{

    test("valid credential",async({page})=>
    {
        console.log("valid login test");
        
    });

    test("invalid credential",async({page})=>
    {
        console.log("invalid login test");
        
    });

});


test("timeout",async({page})=>
{
  test.setTimeout(60000);
   await page.goto("https://www.youtube.com/");


})

