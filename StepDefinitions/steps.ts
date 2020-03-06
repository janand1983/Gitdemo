import { Given, When, Then } from "cucumber"
import {browser,by,element,protractor} from "protractor";
import{async} from "q";
import{yloginpage} from  "../Pageobjects/yumpingologin";
import chai from "chai";
var expect =chai.expect;
let loginpage = new yloginpage();



   Given('User Navigate to Yumpingo staging screen', async ()=> {
    // Write code here that turns the phrase above into concrete actions

    browser.waitForAngularEnabled(false);

    await browser.get('https://app-staging.yumpingo.com/').then(function(){
       browser.sleep(5000);
       console.log("Entered Site");

   })

    
    });

    When('User Enter Credentials {string} , {string}', async(string, string2)=> {
        // Write code here that turns the phrase above into concrete actions
        await loginpage.username.sendKeys(string);  
        await loginpage.password.sendKeys(string2);
        await loginpage.loginbutton.click().then(function(){
            browser.sleep(3000);   
           })
       
      });

      Then('User able to login', async ()=> {
        // Write code here that turns the phrase above into concrete actions
        
        let outputvalue = loginpage.insight.isPresent;
      
      
        await loginpage.insight.isPresent().then(function(isElementVisible) {
            console.log("The state is "+ isElementVisible);
            expect(isElementVisible).to.be.true;   

       });
  
      });

            When('User click on insights menu', async  () => {
                await loginpage.insight.click().then(function(){
                    browser.sleep(3000);   
                   })
            });
   
            Then('Validate Happy Guest count', async () => {
                    await loginpage.HappyCust.getText().then(function(Happycustcount) {
                        console.log("Happy Customer count "+ Happycustcount);
            
                });
            });
   