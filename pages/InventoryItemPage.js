const { expect } = require('@playwright');

class InventoryItemPage {
    constructor(page) {
        this.page = page;
        this.backButton = page.locator('#back-to-products');
        this.tituloProduto = page.locator('div.inventory_details_name.large_size');
        this.precoProduto = page.locator('.inventory_details_price');
    }

    async verificarInventoryItemPage() {
        await expect(this.page).toHaveURL(/.*inventory-item/);
        await expect(this.page).toHaveText('Back to products');
    }

    async verificarTituloPrecoDoProduto(titulo, preco) {
        await expect(this.tituloProduto).toHaveText(titulo);
        await expect(this.precoProduto).toHaveText(preco);
    }
}

module.exports = { InventoryItemPage };