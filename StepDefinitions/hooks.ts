
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before(async function () {
  // Assuming this.driver is a selenium webdriver
  await  browser.driver.manage().deleteAllCookies(); 

//await  browser.restart();

});

Before({tags: "@positive"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.driver.manage().deleteAllCookies();
  browser.executeScript('window.sessionStorage.clear();');
  browser.executeScript('window.localStorage.clear();');
  
  browser.manage().window().maximize();
});

After({tags: "@positive"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
  });

Before({tags: "@AngularTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log(" I need to execute first");
});
After(async function () {
    // Assuming this.driver is a selenium webdriver
    await browser.driver.manage().deleteAllCookies(); 
   
  });



After(async function(scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  if (scenario.result.status=== Status.FAILED)
  {
    //code to take screesnhot
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }


});
