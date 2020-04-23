// login.page.js
import Page from './Base.page'

class LoginPage extends Page {

    get UserEmailInput() { return $('#username') }
    get PasswordInput() { return $('#password') }
    get SignInButton() { return $('#sign_in') }
    get ValidationMessage() { return $('div.messenger-message-inner') }

    LoginWithCredentials(username, password) {
        this.UserEmailInput.waitForClickable()
        this.UserEmailInput.setValue(username)
        this.PasswordInput.setValue(password)
        this.SignInButton.click()
    }

}

export default new LoginPage()