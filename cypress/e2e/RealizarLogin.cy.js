/// <reference types='cypress' />
import Login from '../support/Pages/Login'


describe('Realizar Login', function() {
//describe('Realizar Login', () => {
  
//      before(function(){ 
  //          cy.fixture('credenciais').then((dados)=>{
    //        this.credenciaisExt = dados
      //      })
     // })

      beforeEach (function(){
      //beforeEach (()=>{
      //cy.fixture('credenciais')
    //  cy.fixture('credenciais').then((dados)=>{this.credenciaisExt = dados
    
      cy.fixture('credenciais').then((dados) => {cy.wrap(dados).as('credenciaisExt');
      });

      cy.clearCookies();
      cy.clearLocalStorage();

      Login.acessarURL()
      //cy.visit('/')
      //  Login.acessarURL('/')
      //  cy.url().should('include', 'automationexercise')
      //cy.visit('https://www.automationexercise.com/')
              
      })

  it ('Realizar Login com sucesso', function() {
      //it('Realizar Login com sucesso', () => {
      //  cy.visit('https://www.automationexercise.com/login')
      //  Login.acessarURL() 
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        //Login.preenherEmailaddress('validemail@cypress.com')
        //Login.preencherPassword('validPass')
        Login.clicarEmLogin()
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')
  })

  it ('Realizar Login com Email y Pass com error', function() {
      //it ('Realizar Login com Email y Pass com error', () => {
       //  Login.acessarURL() 
       // Login.preenherEmailaddress('a@b')
       // Login.preencherPassword('abc')
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_invalido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_invalido)
        Login.clicarEmLogin()
    //    Login.validarMensagemDeErro('Your email or password is incorrect!')
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it ('Realizar Login com Email valido y Pass com error', function() {
      //it ('Realizar Login com Email y Pass com error', () => {
       //  Login.acessarURL() 
       // Login.preenherEmailaddress('a@b')
       // Login.preencherPassword('abc')
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_invalido)
        Login.clicarEmLogin()
    //    Login.validarMensagemDeErro('Your email or password is incorrect!')
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

    it ('Realizar Login com Email com error y Pass com valido', function() {
      //it ('Realizar Login com Email y Pass com error', () => {
       //  Login.acessarURL() 
       // Login.preenherEmailaddress('a@b')
       // Login.preencherPassword('abc')
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_invalido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
    //    Login.validarMensagemDeErro('Your email or password is incorrect!')
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it ('Realizar Login sin informar Email', function() { 
    //  it ('Realizar Login sin informar Email', () => {
       //  Login.acessarURL() 
       // Login.preencherPassword('validPass')
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
        cy.contains('Signup / Login').should('be.visible')
        cy.contains('Logout').should('not.exist') //('not.be.visible')
  })

   it ('Realizar Login sin informar Pass', function(){ 
   //      it ('Realizar Login sin informar Pass', () => { 
      //  Login.acessarURL() 
      // Login.preenherEmailaddress('validemail@cypress.com')
        Login.preenherEmailaddress(this.credenciaisExt.emails.email_valido)
        Login.clicarEmLogin()
        cy.contains('Signup / Login').should('be.visible')
        cy.contains('Logout').should('not.exist')
  })

     it ('Realizar Login sin informar Email y Pass', function() { 
   //   it ('Realizar Login sin informar Email y Pass', () => { 
       //  Login.acessarURL() 
        Login.clicarEmLogin()
        cy.contains('Signup / Login').should('be.visible')
        cy.contains('Logout').should('not.exist')
  })

})