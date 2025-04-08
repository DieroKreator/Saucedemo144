const { test, expect } = require('@playwright/test');

test('Fluxo de compra da mochila', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('[name="password"]', 'secret_sauce');
    await page.click('input.submit-button.btn_action');

    await page.waitForTimeout(2000);
}
);