import { ElementFinder,element,by } from "protractor";

export class yloginpage
{
    username: ElementFinder;
    password: ElementFinder;
    loginbutton: ElementFinder;
    insight: ElementFinder;
    HappyCust:ElementFinder;

constructor()
{
        this.username = element(by.xpath("//*[@id='1-email']"));
        this.password = element(by.xpath("//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div/div[2]/div[2]/span/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/input"));
        this.loginbutton =element(by.xpath("//*[@id='auth0-lock-container-1']/div/div[2]/form/div/div/div/button/span/span"));
        this.insight = element(by.xpath("/html/body/yum-root/yum-sidenav/div[2]/div/yum-nav/div[1]/a[2]/span"));
        //this.HappyCust = element(by.css("div[class='very-large-text']"));
        this.HappyCust = element(by.className("very-large-text"));

    }    





}