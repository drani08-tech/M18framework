import {test} from '@playwright/test'
test("move,bounding_box",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
    
    //let box=await page.locator('w-5.h-5.mt-5.ml-3.cursor-pointer').boundingBox();
    let box = await page.locator('<img src="/assets/message-hint-nbRmWGWf.png" alt class="w-5 h-5 mt-5 ml-3 cursor-pointer ">').boundingBox();
    console.log(box);

    
})

test("scroll",async({page})=>
{
   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
   await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded();
   await page.locator('[type="checkbox"]').click();


   //!vertical scrolling
   await page.mouse.wheel(0,1000);
   await page.mouse.wheel(0,-900);

   //!horizontal scrolling
   await page.goto("https://demoapps.qspiders.com/ui/scroll/newHorizontal?scenario=1");
   await page.mouse.wheel(1000,0);
   await page.mouse.wheel(-600,0);



})

test.only("drag and drop ",async({page})=>
{
   // case 1:
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop");
    await page.getByText("Drag Me",{exact:true}).hover();

    await page.mouse.down();
    await page.mouse.move(200,500);
    await page.mouse.up();

    //! case2

   // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
});

