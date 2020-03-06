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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const yumpingologin_1 = require("../Pageobjects/yumpingologin");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let loginpage = new yumpingologin_1.yloginpage();
cucumber_1.Given('User Navigate to Yumpingo staging screen', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get('https://app-staging.yumpingo.com/').then(function () {
        protractor_1.browser.sleep(5000);
        console.log("Entered Site");
    });
}));
cucumber_1.When('User Enter Credentials {string} , {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield loginpage.username.sendKeys(string);
    yield loginpage.password.sendKeys(string2);
    yield loginpage.loginbutton.click().then(function () {
        protractor_1.browser.sleep(3000);
    });
}));
cucumber_1.Then('User able to login', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let outputvalue = loginpage.insight.isPresent;
    yield loginpage.insight.isPresent().then(function (isElementVisible) {
        console.log("The state is " + isElementVisible);
        expect(isElementVisible).to.be.true;
    });
}));
cucumber_1.When('User click on insights menu', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginpage.insight.click().then(function () {
        protractor_1.browser.sleep(3000);
    });
}));
cucumber_1.Then('Validate Happy Guest count', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginpage.HappyCust.getText().then(function (Happycustcount) {
        console.log("Happy Customer count " + Happycustcount);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMkNBQXlEO0FBRXpELGdFQUF3RDtBQUN4RCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUUsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN4QixJQUFJLFNBQVMsR0FBRyxJQUFJLDBCQUFVLEVBQUUsQ0FBQztBQUk5QixnQkFBSyxDQUFDLDBDQUEwQyxFQUFFLEdBQVEsRUFBRTtJQUMzRCxvRUFBb0U7SUFFcEUsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEMsQ0FBQyxDQUFDLENBQUE7QUFHRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3ZFLG9FQUFvRTtJQUNwRSxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQTtBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBUSxFQUFFO0lBQ25DLG9FQUFvRTtJQUVwRSxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUc5QyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsZ0JBQWdCO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFekMsQ0FBQyxDQUFDLENBQUM7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUcsZUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQVUsRUFBRTtJQUM1QyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFBO0FBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7SUFDdEMsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLGNBQWM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRSxjQUFjLENBQUMsQ0FBQztJQUU3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==