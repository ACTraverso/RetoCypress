/// <reference types='cypress' />
import Usuario from '../support/Pages/Usuario'
import Login from '../support/Pages/Login'
import { createDestinatario } from '../support/Factories/destinatario'

describe('Realizar Usuario', () => {
    beforeEach (()=>{
    
        cy.fixture('credenciais').then((dados) => {cy.wrap(dados).as('credenciaisExt');
          });
    
        cy.clearCookies();
        cy.clearLocalStorage();
        Login.acessarURL()
    
   })

  it ('Crear usuario com sucesso', () => {
      //  Login.acessarURL()
      //  cy.visit('https://www.automationexercise.com/login')
        cy.contains('Signup / Login').should('be.visible')

        Usuario.preenherUsername('Carolina')
        Usuario.preenherEmailaddress('siempreNuevo@cypress.com')
        Usuario.clicarEmSignup()
        cy.contains('Enter Account Information').should('be.visible')
        cy.contains('Address Information').should('be.visible')
        cy.contains('Signup / Login').should('be.visible')

        cy.get('#id_gender2').check()
        Usuario.preencherPassword('validPass')
        cy.get('#days').select('10')
        cy.get('#months').select('May')
        cy.get('#years').select('1990')
        cy.get('#first_name').type('A')
        cy.get('#last_name').type('A')
        cy.get('#address1').type('Avalon Ave 200')
        cy.get('#country').select('United States')
        cy.get('#state').type('Florida')
        cy.get('#city').type('Lauderdale')
        cy.get('#zipcode').type('33308')
        cy.get('#mobile_number').type('1199336688')
        
        cy.get('button[data-qa="create-account"]').should('be.visible')
        Usuario.clicarEmCreateUs()
        cy.contains('Account Created!').should('be.visible')
        
    })

  it('Eliminar usuario creado', () => {
    
        cy.contains('Signup / Login').should('be.visible')
        Login.preenherEmailaddress('siempreNuevo@cypress.com')
        Login.preencherPassword('validPass')
        Login.clicarEmLogin()
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')
        cy.contains('Delete Account').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.contains('Account Deleted!').should('be.visible')        

    })
 

  it('Crear usuario com error', () => {

        cy.contains('Signup / Login').should('be.visible')
        Usuario.preenherUsername('Carolina')
        Usuario.preenherEmailaddress('validemail@cypress.com')
        Usuario.clicarEmSignup()
        cy.contains('Email Address already exist!').should('be.visible')
    
    })
})

