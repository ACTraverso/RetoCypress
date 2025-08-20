const el = require('./elements').ELEMENTS

class Login {

    acessarURL(url){
        cy.visit(el.url)
    //  cy.visit(url)
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('Login to your account').should('be.visible')
        cy.contains('New User Signup!').should('be.visible')
        cy.get(el.imgSwagLabs).should('be.visible')
    }

    preenherEmailaddress(email){
        cy.get(el.campoEmailAddress).type(email)
    }

    preencherPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarEmLogin(){
        cy.get(el.botaoLogin).click()
    }


    validarMensagemDeErro(erro){
      cy.get(el.msgErro).should('have.text',erro)
    }

}
export default new Login()