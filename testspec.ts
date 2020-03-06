import {browser,by,element,protractor} from "protractor";
import{async} from "q";
import{yloginpage} from  "./Pageobjects/yumpingologin";


describe('YUmpingo Smoke test',function() {  


    it('Login into Yumpingo website',async()=> {
    
        //write your protractor raw code
       
        let loginpage = new yloginpage();
        

        browser.waitForAngularEnabled(false);
        await browser.get('https://app-staging.yumpingo.com/').then(function(){
            browser.sleep(5000);
            console.log("Entered Site");
        })
         let usernamedata = "anand+staging@yumpingo.com";
         await loginpage.username.sendKeys(usernamedata);  
         await loginpage.password.sendKeys("Divine715*");
         loginpage.loginbutton.click().then(function(){
          browser.sleep(5000);   
         })
         loginpage.insight.click();

     
    })
    

    
    })    

    