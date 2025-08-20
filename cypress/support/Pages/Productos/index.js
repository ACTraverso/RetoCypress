const el = require('./elements').ELEMENTS

class Producto {

    clicarCategoriaKids(){
        cy.get(el.botaoCatKids).click()
    }
    
    addFirstProductToCart() {
        cy.get('.product-overlay').first().invoke('show');
        cy.contains('Add to cart').first().click();
    }

    continueShopping() {
        cy.contains('Continue Shopping').click();
    }

    goToCart() {
        cy.get('a[href="/view_cart"]').click();
    }

proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }

  fillPaymentDetails() {
    cy.get('[name="name_on_card"]').type('Caro Traverso');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2028');
    cy.contains('Pay and Confirm Order').click();
  }

  verifySuccess() {
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  }
}

export default new Producto()