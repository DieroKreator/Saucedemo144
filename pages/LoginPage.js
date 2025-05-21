const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page = page;
        this.txtUserName = page.locator('#user-name');
        this.txtPassword = page.locator('[name="password"]');
        this.btnLogin = page.locator('input.submit-button.btn_action');
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.txtUserName.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}

module.exports = { LoginPage }; // it is important to export the class so it can be used in other files