/// <reference types = "cypress" />

context('Site de compra EBAC', () => {
    describe('Compra', () => {
        it('Fechar compra', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/')
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.contains('Produtos')

            cy.get('#content > div.products.products-grid > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div.caption > div:nth-child(1) > div:nth-child(1) > h3 > a:nth-child(1)').click()
            cy.get('form > table > tbody > tr:nth-child(1) > td.value.woo-variation-items-wrapper > ul > li.variable-item.button-variable-item.button-variable-item-M').click()
            cy.get('form > table > tbody > tr:nth-child(2) > td.value.woo-variation-items-wrapper > ul > li.variable-item.button-variable-item.button-variable-item-Blue').click()
            cy.get('form > div > div.woocommerce-variation.single_variation > div.woocommerce-variation-description > p:nth-child(1)').should('have.text', 'It took CoolTech™ weather apparel know-how and lots of wind-resistant fabric to get the Abominable Hoodie just right. It’s aggressively warm when it needs to be, while maintaining your comfort in milder climes.')
            cy.get('form > div > div.woocommerce-variation-add-to-cart.variations_button.woocommerce-variation-add-to-cart-enabled > button').click()

            cy.get('#content > div.woocommerce-notices-wrapper > div > a').click()
            cy.get('#main > div > div:nth-child(2) > form > div > table > tbody > tr.cart_item > td.product-name > a').should('have.text', 'Abominable Hoodie - M, Blue')

            cy.get('#main > div > div.cart-collaterals.widget > div > div > a').click()
            cy.contains('Detalhes de faturamento')

            cy.get('#billing_first_name').type('Carol')
            cy.get('#billing_last_name').type('Ciola')
            cy.get('#billing_company').type('ACME')

            //Seleciona país
            cy.get('#select2-billing_country-container').click()
            cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('Brasil')
            cy.get('body > span > span > span.select2-results').click()

            cy.get('#billing_address_1').type("Avenida Vivaldi, 100")
            cy.get('#billing_city').type('São Paulo')

            //Seleciona Estado
            cy.get('#select2-billing_state-container').click()
            cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('São Paulo')
            cy.get('body > span > span > span.select2-results').click()

            cy.get('#billing_postcode').type('09520070')
            cy.get('#billing_phone').type('11988887777')
            cy.get('#billing_email').type('carol.ciola@email.com')

            cy.get('#place_order').click()

            cy.contains('Pedido recebido')
        });
    });
});