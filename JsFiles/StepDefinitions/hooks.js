"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Assuming this.driver is a selenium webdriver
        yield protractor_1.browser.driver.manage().deleteAllCookies();
        //await  browser.restart();
    });
});
cucumber_1.Before({ tags: "@positive" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.driver.manage().deleteAllCookies();
    protractor_1.browser.executeScript('window.sessionStorage.clear();');
    protractor_1.browser.executeScript('window.localStorage.clear();');
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@positive" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
});
cucumber_1.Before({ tags: "@AngularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log(" I need to execute first");
});
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Assuming this.driver is a selenium webdriver
        yield protractor_1.browser.driver.manage().deleteAllCookies();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUM7O1FBQ0wsK0NBQStDO1FBQy9DLE1BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVwRCwyQkFBMkI7SUFFM0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUU7SUFDMUIsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0Msb0JBQU8sQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN4RCxvQkFBTyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRXRELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxFQUFFO0lBQ3ZCLCtEQUErRDtJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFTCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDaEMsd0VBQXdFO0lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNILGdCQUFLLENBQUM7O1FBQ0YsK0NBQStDO1FBQy9DLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUVuRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBSUwsZ0JBQUssQ0FBQyxVQUFlLFFBQVE7O1FBQzNCLCtEQUErRDtRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFDM0M7WUFDRSx5QkFBeUI7WUFDMUIsTUFBTSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO0lBR0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9