const { $ } = require('@wdio/globals')
const Page = require('../page');

class LoginPage {

    //Getter method for loginLocators
    get buttonHamburger() { return $('~open menu'); }
    get menuOptionLogin() { return $('~menu item log in'); }
    get usernameInput() { return $('~Username input field'); }
    get passwordInput() { return $('~Password input field'); }
    get loginButton() { return $('~Login button'); }
    get genericErrorMessage() { return $('xpath://android.widget.TextView[@text="Provided credentials do not match any user in this service."]'); }
    get genericErrorMessageLocked() { return $('xpath://android.widget.TextView[@text="Sorry, this user has been locked out."]'); }
    get errorMessageUserName() { return $('xpath://android.widget.TextView[@text="Username is required"]'); }
    get errorMessagePasswordRequired() { return $('xpath://android.widget.TextView[@text="Password is required"]'); }
    get buttonGoShopping() { return $('~Go Shopping button'); }


    // Action method for enter the username in the input field
    async enterUsername(username) {
        console.log(`Entering username: ${username}`);
        await this.usernameInput.setValue(username);
        console.log(`Entered username: ${username}`);
    }

    // Action method for enter the password in the input field
    async enterPassword(password) {
        console.log(`Entering password`);
        await this.passwordInput.setValue(password);
        console.log(`Entered password`);
    }

    // Action method for click on the login button
    async clickLoginButton() {
        console.log(`Clicking on login button`);
        await this.loginButton.click();
        console.log(`Clicked on login button`);
    }

    // Action method for click on the login button
    async moveToLoginPage() {
        console.log(`Navigate to login page`);
        await this.buttonHamburger.click();
        await this.menuOptionLogin.click();
        console.log(`Navigated to login page`);
    }

    // Wrapper method for login
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = { LoginPage };