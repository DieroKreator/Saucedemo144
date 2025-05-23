const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

// class CheckoutStepTwoPage extends BasePage {
class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('.title');
        this.tituloProduto = page.locator('.inventory_item_name');
        this.precoProduto = page.locator('.inventory_item_price');
        this.quantidadeProduto = page.locator('.cart_quantity');
        this.botaoFinish = page.locator('[data-test="finish"]');
        this.botaoCancel = page.locator('[data-test="cancel"]');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async verificarCheckoutStepTwoPage() {
        await expect(this.page).toHaveURL(/.*checkout-step-two/);
        await expect(this.tituloSecao).toHaveText('Checkout: Overview');
    }

    async verificarTituloPrecoDoProduto(tituloProduto, precoProduto) {
        await expect(this.tituloProduto).toHaveText(tituloProduto);
        await expect(this.precoProduto).toHaveText(precoProduto);
    }

    async verificarQuantidadeProduto(quantidade) {
        await expect(this.quantidadeProduto).toHaveText(quantidade);
    }

    async clicarNoBotaoFinish() {
        await this.botaoFinish.click();
    }

    async clicarNoBotaoCancel() {
        await this.botaoCancel.click();
    }

    async clicarNoBotaoShoppingCart() {
        await this.shoppingCartLink.click();
    }
}