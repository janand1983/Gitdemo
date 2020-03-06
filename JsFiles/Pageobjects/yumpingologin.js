"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class yloginpage {
    constructor() {
        this.username = protractor_1.element(protractor_1.by.xpath("//*[@id='1-email']"));
        this.password = protractor_1.element(protractor_1.by.xpath("//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div/div[2]/div[2]/span/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/input"));
        this.loginbutton = protractor_1.element(protractor_1.by.xpath("//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div/button/span/span"));
        this.insight = protractor_1.element(protractor_1.by.xpath("/html/body/yum-root/yum-sidenav/div[2]/div/yum-nav/div[1]/a[2]/span"));
        //this.HappyCust = element(by.css("div[class='very-large-text']"));
        this.HappyCust = protractor_1.element(protractor_1.by.className("very-large-text"));
    }
}
exports.yloginpage = yloginpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVtcGluZ29sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VvYmplY3RzL3l1bXBpbmdvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxVQUFVO0lBUXZCO1FBRVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtJQUErSSxDQUFDLENBQUMsQ0FBQztRQUNuTCxJQUFJLENBQUMsV0FBVyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDLENBQUM7UUFDdEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFOUQsQ0FBQztDQU1KO0FBdkJELGdDQXVCQyJ9