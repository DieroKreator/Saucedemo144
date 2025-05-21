const { expect } = require('@playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('span.title');
        this.backpack = page.locator('#item_4_title_link');
    }

    async verificarInventoryPage () {
        await expect(this.page).toHaveURL(/.*inventory/);
        await expect(this.tituloSecao).toHaveText('Products');
    }

    async clicarNaMochila () {
        await this.backpack.click();
    }
}
module.exports = { InventoryPage };