"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class login1 {
    Constructor() {
        this.username = protractor_1.element(protractor_1.by.xpath("//*[@id='1-email']"));
        this.password = protractor_1.element(protractor_1.by.name("password"));
        // this.loginButton = element(by.xpath("//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div/button/span/span"));
    }
}
exports.login1 = login1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvbG9naW4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBQ3hELE1BQWEsTUFBTTtJQUlmLFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5QywwSEFBMEg7SUFDN0gsQ0FBQztDQUNKO0FBVEQsd0JBU0MifQ==