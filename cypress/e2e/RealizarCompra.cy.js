/// <reference types='cypress' />
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora todos los errores uncaught de la app
  return false;
});

import Login from '../support/Pages/Login'
import Productos from '../support/Pages/Productos'
import {createDestinatario} from '../support/Factories/destinatario';

describe('Realizar Compra', function() {

    const destinatarioFaker = createDestinatario

    beforeEach (function(){

      cy.fixture('credenciais').then((dados) => {cy.wrap(dados).as('credenciaisExt');
            });
      cy.clearCookies();
      cy.clearLocalStorage();
      Login.acessarURL()
        
      })

    it ('Realizar compra con sucesso', function() { 
    
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')

      //  Productos.clicarCategoriaKids()
        cy.get('a[href="#Kids"]').click()
        cy.get('a[href="/category_products/4"]').click()
        cy.contains('Kids - Dress Products').should('be.visible')
     //   cy.get('a.btn.btn-default.add-to-cart').click()
        
        cy.get('.features_items .product-image-wrapper').first().within(() => {
        cy.contains('Add to cart').click();
            });
        
        cy.get('a[href="/view_cart"]').first().click();

        //cy.contains('Continue Shopping').should('be.visible')
        //cy.contains('Continue Shopping').click();

     //    let elIndex = Cypress._.random (0, 5)
      //   cy.log('Número: $(elIndex)')
        // cy.get('button[a[class="btn btn-default add-to-cart"]]').eq(elIndex)
       //  cy.get('.features_items .product-image-wrapper').eq(elIndex)
    //    cy.get('button[a[class="btn btn-default add-to-cart"]]').each(($btn, $index)=>{
    //        if($index === elIndex){
    //            cy.wrap($btn).click()
    //        }
    //    })

        // Agregar el primer producto al carrito
      //  cy.get('.features_items .product-image-wrapper').first().within(() => {
      //  cy.contains('Add to cart').click();

    //    cy.get('class="btn btn-success close-modal btn-block"]').click()
        //cy.contains('Continue Shopping').click();
        cy.contains('Item').should('be.visible')

                
      //  cy.get('button[class="btn btn-default check_out"]').click()
        cy.get('a[class="btn btn-default check_out"]').click()
        
      //  cy.get('[class="btn btn-success close-modal btn-block"]').click()

        cy.get(':nth-child(7) > .btn').click()
        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        cy.get('input[data-qa="name-on-card"]').type('AA')
      
  //      cy.get('input[data-qa="name-on-card"]').type(destinatarioFaker.firstName)

        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        cy.get('input[class="form-control card-number"]').type('123')
       
        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        cy.get('input[class="form-control card-cvc"]').type('311')
       
        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        cy.get('input[class="form-control card-expiry-month"]').type('09')
       
        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        cy.get('input[class="form-control card-expiry-year"]').type('2025')
       
        cy.get('button[class="form-control btn btn-primary submit-button"]').click()
        
        cy.contains('Order Placed!').should('be.visible')
       
        cy.get(' [data-qa="continue-button"]').click()
        //cy.get('button[a[class="btn btn-primary"]').click()
        
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')
        
        
        });

      //  clicando no carrito
       // cy.get('i[class="fa fa-shopping-cart"]').click()
        
    })
      
    
    //})
      
    