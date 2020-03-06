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
        let loginpage = new yumpingologin_1.yloginpage();
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://app-staging.yumpingo.com/').then(function () {
            protractor_1.browser.sleep(5000);
            console.log("Entered Site");
        });
        let usernamedata = "anand+staging@yumpingo.com";
        yield loginpage.username.sendKeys(usernamedata);
        yield loginpage.password.sendKeys("Divine715*");
        loginpage.loginbutton.click().then(function () {
            protractor_1.browser.sleep(5000);
        });
        loginpage.insight.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF5RDtBQUV6RCwrREFBdUQ7QUFHdkQsUUFBUSxDQUFDLHFCQUFxQixFQUFDO0lBRzNCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQyxHQUFPLEVBQUU7UUFFdEMsZ0NBQWdDO1FBRWhDLElBQUksU0FBUyxHQUFHLElBQUksMEJBQVUsRUFBRSxDQUFDO1FBR2pDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxZQUFZLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUcvQixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBSUYsQ0FBQyxDQUFDLENBQUEifQ==