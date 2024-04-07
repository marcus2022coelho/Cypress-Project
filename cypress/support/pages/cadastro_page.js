/// <reference types="cypress"/>

  
//Elementos
const elementos = {
    buttons: {
        botaoCadastrar: '#btnRegister'

    },
    fields: {
        name: '#user',
        email: '#email',
        senha: '#password',

    },
    menssages: {
        validarMensagem: '#errorMessageFirstName',
        validarMensagemSucesso: '#swal2-title'

    }
}

export default{

//Ações
clicarCadastro() {
    cy.get(elementos.buttons.botaoCadastrar).click()
},

preencherName(name) {
    cy.get(elementos.fields.name)
        .type(name)
},

preencherEmail(email) {
    cy.get(elementos.fields.email)
        .type(email)
},

preencherSenha(senha) {
    cy.get(elementos.fields.senha)
        .type(senha)
},

validarMensagem(mensagem){
    cy.get(elementos.menssages.validarMensagem)
        .should('contain', mensagem)

},

validarMensagemSucesso(mensagem) {
    cy.get(elementos.menssages.validarMensagemSucesso)
        .should('contain', mensagem)

}

}