import { Locator,Page } from "@playwright/test";



class Register
{
    page:Page;
    txtName:Locator;
    txtlastName:Locator;
    txtEmail:Locator;
    RBtnMale:Locator;
    RBtnFemale:Locator;
    RBtnOthers:Locator;
    txtMobileNo:Locator;
    CalnDOB:Locator;
    DDyear:Locator;
    DDmonth:Locator;
    date:Locator;
    DDSubjects:Locator;
    CBoxSports:Locator;
    CBoxReading:Locator;
    CBoxMusic:Locator;
    UBTnChooseFile:Locator;
    txtAddress:Locator;
    DDState:Locator;
    DDCity:Locator;
    BtnSubmit:Locator;

    constructor(page:Page)
    {
       this.page = page;
       this.txtName = page.locator('#firstName');
       this.txtlastName = page.locator('#lastName');
       this.txtEmail = page.getByPlaceholder("name@example.com",{exact:true});
       this.RBtnMale = page.locator('#gender-radio-1');
       this.RBtnFemale = page.locator('#gender-radio-2');
       this.RBtnOthers = page.locator('#gender-radio-3');
       this.txtMobileNo = page.getByPlaceholder("Mobile Number",{exact:true});
       this.CalnDOB = page.locator("#dateOfBirthInput");
       this.DDyear=page.locator('.react-datepicker__year-select');
       this.DDmonth = page.locator('.react-datepicker__moth-select');
       this.date=page.getByText("5",{exact:true});
       this.DDSubjects = page.locator('//div[@class="subject-auto-complete__controlcss-13cymwt-control"]')
       this.CBoxSports = page.locator('#hobbies-checkbox-1');
       this.CBoxReading = page.locator('#hobbies-checkbox-2');
       this.CBoxMusic = page.locator('#hobbies-checkbox-3');
       this.UBTnChooseFile = page.locator('//*[@id="uploadPicture"]');
       this.txtAddress = page.getByPlaceholder("current Address",{exact:true});
       this.DDState = page.locator('//div[@class="css-13cymwt-control"]');
       this.DDCity = page.locator("#city");
       this.BtnSubmit = page.getByRole("button",{name:"Submit",exact:true});

    }

    async launchURL(url:string)
    {
        await this.page.goto(url)
    }

    async entername(name:string,lastName:string,email:string)
    {
        await this.txtName.fill(name)
        await this.txtlastName.fill(lastName)
        await this.txtEmail.fill(email)

    }

    async selectgender(gender:string)
    {
        if(gender==="Male")
        {
            await this.RBtnMale.click()
        }
        else if(gender==="Female")
        {
            await this.RBtnFemale.click()
        }
        else if(gender==="Others")
        {
            await this.RBtnOthers.click()
        }
    }

    async MobileNo(mob:string)
    {
        await this.txtMobileNo.fill(mob)

    }

    async selectDate(year:number,month:number)
    {
        await this.CalnDOB.click()
        await this.DDyear.selectOption(String(year))
        await this.DDmonth.selectOption(String(month))
        await this.date.first().click()
        await this.page.keyboard.press("Tab")


    }
    

    async selectSubject(subject:string)
    {
        await this.DDSubjects.fill(subject)
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
    }

    async selectHobbies(hobbies:string)
    {
        for(const hobby of hobbies)
        {
            if(hobby==="Sports")
            {
                await this.CBoxSports.click()
            }
            else if(hobby==="Reading")
            {
                await this.CBoxReading.click()
            }
            else if((hobby==="Music"))
            {
                await this.CBoxMusic.click();
            }
        }
    }

    async uploadPicture(picturepath:string)
    {
        if(picturepath)
        {
            await this.UBTnChooseFile.setInputFiles(picturepath)
            
        }
    }
       
    
    async enterAddress(address:string)
    {
        await this.txtAddress.fill(address)
    }

    async selectStateAndCity(state:string,city:string)
    {
        await this.DDState.click();
        await this.DDCity.click();
    }

    async submitForm()
    {
        await this.BtnSubmit.click();
    }

         
}
export default Register;