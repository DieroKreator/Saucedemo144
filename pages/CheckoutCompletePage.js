const { expect } = require('@playwright/test');

class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('.title');
        this.mensagemDeSucesso = page.locator('.complete-header');
        this.botaoBackHome = page.locator('[data-test="back-to-products"]');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async verificarCheckoutCompletePage() {
        await expect(this.page).toHaveURL(/.*checkout-complete/);
        await expect(this.tituloSecao).toHaveText('Checkout: Complete!');
    }

    async verificarMensagemDeSucesso(mensagem) {
        await expect(this.mensagemDeSucesso).toHaveText(mensagem);
    }

    async clicarNoBotaoBackHome() {
        await this.botaoBackHome.click();
    }

    async clicarNoBotaoShoppingCart() {
        await this.shoppingCartLink.click();
    }
}
module.exports = { CheckoutCompletePage };