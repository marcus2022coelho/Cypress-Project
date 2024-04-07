/// <reference types="cypress" />

Cypress.Commands.add('acessarPaginaHome', () => {

    //acessar a aplicacao
    cy.visit('/')
        .get('.top_header_right')

        //clicou na tela de registro
        .contains('Cadastro').click()
        


})