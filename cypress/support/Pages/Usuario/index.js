const el = require('./elements').ELEMENTS

class Usuario {

    acessarURL(url) {
       // cy.visit(el.url)
       cy.visit(url)
       cy.contains('Login to your account').should('be.visible')
       cy.contains('New User Signup!').should('be.visible')
        //cy.get(el.imgSwagLabs).should('be.visible')
    }

    preenherUsername(name){
        cy.get(el.campoUsername).type(name)
    }
    
    preenherEmailaddress(email){
        cy.get(el.campoEmailAddress).type(email)
    }
    
    clicarEmSignup(){
        cy.get(el.botaoSignup).click()
    }

    preencherPassword(password){
        cy.get(el.campoPassWord).type(password)
    }

   clicarEmCreateUs(){
        cy.get(el.botaoCreateUs).click()
    }

    validarMensagemDeErro(erro){
      cy.get(el.msgErro).should('have.text',erro)
    }

}
export default new Usuario()