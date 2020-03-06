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
const protractor_1 = require("protractor");
const yumpingologin_1 = require("./Pageobjects/yumpingologin");
describe('YUmpingo Smoke test', function () {
    it('Login into Yumpingo website', () => __awaiter(this, void 0, void 0, function* () {
        //write your protractor raw code
        let i = 1;
        let loginpage = new yumpingologin_1.yloginpage();
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://app-staging.yumpingo.com/').then(function () {
            protractor_1.browser.sleep(5000);
            console.log("entered" + i);
        });
        let usernamedata = "anand+staging@yumpingo.com";
        yield loginpage.username.sendKeys(usernamedata);
        //  await loginpage.password.sendKeys("Divine715*",protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.TAB),usernamedata,protractor.Key.TAB);
        yield loginpage.password.sendKeys("Divine715*");
        //element(by.xpath("//*[@id='1-email']")).sendKeys("anand+staging@yumpingo.com");
        //element(by.css("input[type='password']")).sendKeys("Divine715*");
        loginpage.loginbutton.click().then(function () {
            protractor_1.browser.sleep(50000);
        });
        yield loginpage.username.sendKeys("anand+staging@yumpingo.com");
        // await loginpage.password.sendKeys("Divine715*");
        //await element(by.xpath("//*[@id='1-email']")).sendKeys("anand+staging@yumpingo.com");
        //loginpage.insight.click().then(function(){
        //   browser.sleep(5000);
        // })
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMgY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RzcGVjIGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFJekQsK0RBQXVEO0FBR3ZELFFBQVEsQ0FBQyxxQkFBcUIsRUFBQztJQUczQixFQUFFLENBQUMsNkJBQTZCLEVBQUMsR0FBTyxFQUFFO1FBRXRDLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFNBQVMsR0FBRyxJQUFJLDBCQUFVLEVBQUUsQ0FBQztRQUdqQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRCxJQUFJLFlBQVksR0FBRyw0QkFBNEIsQ0FBQztRQUNqRCxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELG1KQUFtSjtRQUVuSixNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELGlGQUFpRjtRQUNoRixtRUFBbUU7UUFFbkUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFHL0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsQ0FBQyxDQUFDLENBQUE7UUFDUCxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDakUsbURBQW1EO1FBRW5ELHVGQUF1RjtRQUU3Riw0Q0FBNEM7UUFFdkMseUJBQXlCO1FBRXZCLEtBQUs7SUFFUixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBSUYsQ0FBQyxDQUFDLENBQUEifQ==