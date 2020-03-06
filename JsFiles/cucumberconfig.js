"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['incognito']
        }
    },
    specs: ['../features/*.feature'],
    cucumberOpts: {
        // require step definitions
        format: 'json:./reports/cucumberreport.json',
        require: [
            './StepDefinitions/*.js',
        ]
    },
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumberreport.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFDeEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFakUsWUFBWSxFQUFFO1FBRVosV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFFO1lBQ1gsSUFBSSxFQUFHLENBQUMsV0FBVyxDQUFDO1NBQ3ZCO0tBRUY7SUFDRCxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUdoQyxZQUFZLEVBQUU7UUFDWiwyQkFBMkI7UUFFM0IsTUFBTSxFQUFDLG9DQUFvQztRQUczQyxPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FDRjtJQUVELGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUVuQixVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUczQixDQUFDO0lBR0YsNEJBQTRCO0lBRTNCLDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBRWxCLENBQUMifQ==