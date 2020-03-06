import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";
export let config: Config = {
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
  capabilities: {
    
    browserName: 'chrome',
    chromeOptions: {
        args : ['incognito']
    }
    
  },
  specs: ['../features/*.feature'],
  

  cucumberOpts: {
    // require step definitions
 
    format:'json:./reports/cucumberreport.json',
   
    
    require: [
      './StepDefinitions/*.js', // accepts a glob,
    
    ]
  },

  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  onComplete: () =>{
    var options = {
      theme: 'bootstrap',
      jsonFile: './reports/cucumberreport.json',
      output: './reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };

  reporter.generate(options);


  }

  
 // allScriptsTimeout: 20000,
 
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  //noGlobals: true

};

