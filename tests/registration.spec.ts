import {test} from '@playwright/test'
import Register from '../pageobjectmodel/registration.page'
import data from '../ddt/registration.json'

test("DemoQA Registration Form",async({page})=>
{
    let registrationPage = new Register(page)

    for(let user of data)
    {
      await registrationPage.launchURL(user.url)
      await registrationPage.entername(user.name,user.lastname,user.email)
      await registrationPage.selectgender(user.gender)
      await registrationPage.MobileNo(user.mob)
      await registrationPage.selectDate(user.year,user.month)
      await registrationPage.selectSubject(user.subject)
      await registrationPage.selectHobbies(user.hobbies)
      await registrationPage.uploadPicture(user.picturepath)
      await registrationPage.enterAddress(user.address)
      await registrationPage.selectStateAndCity(user.state,user.city)
      await registrationPage.submitForm()
      
      
    }
});