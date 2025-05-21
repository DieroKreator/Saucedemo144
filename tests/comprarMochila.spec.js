const { test, expect } = require('@playwright/test')

test('Fluxo de compra da mochila', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('[name="password"]', 'secret_sauce')
    await page.click('input.submit-button.btn_action')

    // await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*inventory/)
    // await expect(page.locator('span.title').textContent(), 'Products');
    const tituloSecao = page.locator('span.title')
    await expect(tituloSecao).toHaveText('Products')

    // await page.click('#item_4_title_link')

    // await expect(page).toHaveURL(/.*inventory-item/)

    const tituloProduto = page.locator('#back-to-products')
    await expect(tituloProduto).toHaveText('Sauce Labs Backpack')

    const precoProduto = page.locator('.inventory_details_price')
    await expect(precoProduto).toHaveText('$29.99')

    // await page.waitForTimeout(2000);
}
);