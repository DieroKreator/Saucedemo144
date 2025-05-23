const { expect } = require('@playwright/test');

class CheckoutStepOnePage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('.title');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.zipCodeInput = page.locator('[data-test="postalCode"]');
        this.botaoContinue = page.locator('[data-test="continue"]');
        this.botaoCancel = page.locator('[data-test="cancel"]');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async verificarCheckoutPage() {
        await expect(this.page).toHaveURL(/.*checkout-step-one/);
        await expect(this.tituloSecao).toHaveText('Checkout: Your Information');
    }

    async preencherFormularioCheckout(firstName, lastName, zipCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
    }

    async clicarNoBotaoContinue() {
        await this.botaoContinue.click();
    }

    async clicarNoBotaoCancel() {
        await this.botaoCancel.click();
    }

    async clicarNoBotaoShoppingCart() {
        await this.shoppingCartLink.click();
    }
}
module.exports = { CheckoutStepOnePage };