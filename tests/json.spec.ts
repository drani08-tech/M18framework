import {test} from '@playwright/test'
import d from "../ddt/data.json"

/*test("single data",async()=>
{
    console.log(data.greet);
    
});*/

test.only("multipal data",async()=>
{
    d.forEach((d) => {
        console.log(d.data)
        
    })
});


