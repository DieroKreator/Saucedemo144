const { expect } = require('@playwright/test');

class InventoryItemPage {
    constructor(page) {
        this.page = page;
        this.backButton = page.locator('#back-to-products');
        this.tituloProduto = page.locator('div.inventory_details_name.large_size');
        this.precoProduto = page.locator('.inventory_details_price');
        this.shoppingCartBadge = this.page.locator('.shopping_cart_badge');
    }

    async verificarInventoryItemPage() {
        await expect(this.page).toHaveURL(/.*inventory-item/);
        await expect(this.backButton).toHaveText('Back to products');
    }

    async verificarTituloPrecoDoProduto(titulo, preco) {
        await expect(this.tituloProduto).toHaveText(titulo);
        await expect(this.precoProduto).toHaveText(preco);
    }

    async clicarNoBotaoAddToCart() {
        await this.page.locator('#add-to-cart').click();
    }

    async verificarShoppingCartBadge(cartItemsCount) {
        if (cartItemsCount > 0) {
            await expect(this.shoppingCartBadge).toBeVisible();
        } else {
            await expect(this.shoppingCartBadge).toBeHidden();
        }
    }

    async clicarNoBotaoRemove() {
        const botaoRemove = this.page.locator('#remove');
        await expect(botaoRemove).toHaveText('Remove');
        await botaoRemove.click();
    }

    async clicarNoBotaoShoppingCart() {
        const botaoShoppingCart = this.page.locator('.shopping_cart_link');
        await expect(botaoShoppingCart).toHaveText('1');
        await botaoShoppingCart.click();
    }
}

module.exports = { InventoryItemPage };