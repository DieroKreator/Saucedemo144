const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('[data-test="title"]');
        this.tituloProduto = page.locator('.inventory_item_name');
        this.precoProduto = page.locator('.inventory_item_price');
        this.quantidadeProduto = page.locator('.cart_quantity');
        this.botaoCheckout = page.locator('#checkout');
    }

    async verificarShoppingCartPage() {
        await expect(this.page).toHaveURL(/.*cart/);
        await expect(this.tituloSecao).toHaveText('Your Cart');
    }

    async verificarTituloPrecoDoProduto(titulo, preco) {
        await expect(this.tituloProduto).toHaveText(titulo);
        await expect(this.precoProduto).toHaveText(preco);
    }

    async verificarQuantidadeProduto(quantity) {
        await expect(this.quantidadeProduto).toHaveText(quantity.toString());
    }

    async clicarNoBotaoCheckout() {
        await this.botaoCheckout.click();
    }
}

module.exports = { CartPage };