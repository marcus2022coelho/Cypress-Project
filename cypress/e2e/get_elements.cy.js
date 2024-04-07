/// <reference types="cypress" />

describe('Get Elements', () => {
    
    it('Encontrar elementos', () => {

        //get() - selecionar elementos
        cy.visit('/')
        cy.get('.header-logo')

        // contains() - para encontrar parte de um elemento por texto
        //geralmente diminuimos o escopo com um get()
        cy.get('#top_header').as('teste')
            .contains('Login')

        //find() - para encontrar elementos
        //geralmente diminuimos o escopo com um get()

        cy.get('@teste').find('.fa-user')

        //alias() - serve para criar apelidos ou atalhos para grandes comandos

    

    })


})