import LoginPage from '../Pages/Login.page'
import allureReporter from "@wdio/allure-reporter";
//import timeLineService from 'wdio-timeline-reporter/timeline-service'
//const chai = require('chai');

beforeEach(function () {
    LoginPage.open("/login")
    allureReporter.addFeature('Login Page')
});

describe('Login page', () => {

    it('should load directly through URL', () => {

        expect(LoginPage.UserEmailInput).toBeDisplayed()
        expect(LoginPage.PasswordInput).toBeDisplayed()
        expect(LoginPage.SignInButton).toBeDisplayed()

    })
})

describe('Login page', () => {
    it('should inform user about incorrect credentials', () => {

        //LoginPage.open("/login")

        LoginPage.LoginWithCredentials("incorrectuser@talech.com", "incorrectpassword")

        LoginPage.ValidationMessage.waitForDisplayed()
        expect(LoginPage.ValidationMessage.getText()).toEqual("Email or Password is Incorrect")
    })
})

