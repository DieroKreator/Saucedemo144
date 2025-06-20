const { test, expect } = require('@playwright/test')
const { lerCsv } = require('../utils/lerCsv')
const { LoginPage } = require('../pages/LoginPage')
const { InventoryPage } = require('../pages/InventoryPage')
const { InventoryItemPage } = require('../pages/InventoryItemPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutStepOnePage } = require('../pages/CheckoutStepOnePage')
const { CheckoutStepTwoPage } = require('../pages/CheckoutStepTwoPage')
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage')

const registros = lerCsv('fixtures/csv/massaProdutos.csv')
console.log(registros)

for (const { user, password, sku, titulo_produto, preco_produto } of registros) {
    test.only(`Fluxo de compra da ${titulo_produto} PO`, async ({ page }) => {
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)
        const inventoryItemPage = new InventoryItemPage(page)
        const cartPage = new CartPage(page)
        const checkoutStepOnePage = new CheckoutStepOnePage(page)
        const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
        const checkoutCompletePage = new CheckoutCompletePage(page)

        await loginPage.goto('https://www.saucedemo.com/')
        await loginPage.login(user, password)
        await inventoryPage.verificarInventoryPage()
        await inventoryPage.clicarProduto(sku)
        await inventoryItemPage.verificarInventoryItemPage()
        await inventoryItemPage.verificarTituloPrecoDoProduto(titulo_produto, preco_produto)

        await inventoryItemPage.clicarNoBotaoAddToCart()
        await inventoryItemPage.verificarShoppingCartBadge(1)
        await inventoryItemPage.clicarNoBotaoRemove()
        await inventoryItemPage.verificarShoppingCartBadge(0)
        await inventoryItemPage.clicarNoBotaoAddToCart()
        await inventoryItemPage.clicarNoBotaoShoppingCart()

        await cartPage.verificarShoppingCartPage()
        await cartPage.verificarTituloPrecoDoProduto(titulo_produto, preco_produto)
        await cartPage.verificarQuantidadeProduto(1)
        await cartPage.clicarNoBotaoCheckout()

        await checkoutStepOnePage.verificarCheckoutPage()
        await checkoutStepOnePage.preencherFormularioCheckout('Lucas', 'Silva', '12345')
        await checkoutStepOnePage.clicarNoBotaoContinue()

        await checkoutStepTwoPage.verificarCheckoutStepTwoPage()
        await checkoutStepTwoPage.verificarTituloPrecoDoProduto(titulo_produto, preco_produto)
        await checkoutStepTwoPage.verificarQuantidadeProduto(1)
        await checkoutStepTwoPage.clicarNoBotaoFinish()

        await checkoutCompletePage.verificarCheckoutCompletePage()
        await checkoutCompletePage.verificarMensagemDeSucesso('Thank you for your order!')
        await checkoutCompletePage.clicarNoBotaoBackHome()
    })
}