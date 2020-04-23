import HomePage from '../Pages/Home.page'
import LoginPage from '../Pages/Login.page'
import allureReporter from "@wdio/allure-reporter"
//import timeLineService from 'wdio-timeline-reporter/timeline-service'
const assert = require('assert')

describe('Talech page', () => {
    it('should load correctly', () => {

        allureReporter.addFeature('Home Page')

        HomePage.open("/")
        assert.strictEqual(HomePage.FreeDemoButton.isDisplayed(),true, "Free Demo button is not displayed")
        assert.strictEqual(HomePage.LogInLink.isDisplayed(),true, "LogIn link is not displayed")
        assert.strictEqual(HomePage.SupportLink.isDisplayed(),true, "Support link is not displayed")

    })
})

describe('Login page', () => {
    it('should load correctly from Home Page', () => {

        allureReporter.addFeature('Home Page')

        HomePage.open("/")

        HomePage.LoginToSite()

        LoginPage.UserEmailInput.waitForDisplayed()

        assert.strictEqual(LoginPage.UserEmailInput.isDisplayed(),true, "User name field is not displayed")
        assert.strictEqual(LoginPage.PasswordInput.isDisplayed(),true, "Password field is not displayed")
        assert.strictEqual(LoginPage.SignInButton.isDisplayed(),true, "Sign In button is not displayed")

    })
})