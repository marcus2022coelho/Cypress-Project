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




//Ações
Cypress.Commands.add('clicarCadastro', () => {
    cy.get(elementos.buttons.botaoCadastrar).click()
})

Cypress.Commands.add('preencherName', (name) => {
    cy.get(elementos.fields.name)
        .type(name)
})

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get(elementos.fields.email)
        .type(email)
})

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get(elementos.fields.senha)
        .type(senha)
})

Cypress.Commands.add('validarMensagem', (mensagem) => {
    cy.get(elementos.menssages.validarMensagem)
        .should('contain', mensagem)

})

Cypress.Commands.add('validarMensagemSucesso', (mensagem) => {
    cy.get(elementos.menssages.validarMensagemSucesso)
        .should('contain', mensagem)

})
