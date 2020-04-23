// login.page.js
import Page from './Base.page'

class HomePage extends Page {

    get LogInLink() { return $('#login') }
    get SupportLink() { return $('=Support') }
    get FreeDemoButton() { return $('#signup') }

    LoginToSite() {
        this.LogInLink.waitForClickable()
        this.LogInLink.click()
    }

}

export default new HomePage()