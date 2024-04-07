/// <reference types="cypress" />

describe('Interações', () => {
    it('Click', () => {
        cy.visit('/')
            .get('.fa-user')
            .click()

        //click duplo
        cy.get('.fa-user')
            .dblclick()

        //click botão direito
        cy.get('.fa-user')
            .rightclick()

        //clique por coordenadas
        cy.get('.fa-user')
            .click(100, 100, { force: true })

        //Apertar no enter do teclado
        cy.get('.fa-user').type('teste{enter}')

    })

    it('Select', () => {
        cy.visit('/')
            .get('.header-logo')
            .get('.footer_one_widget')
            .contains('Checkout View Two').click()

        cy.get('#country').select('Albania')



    });

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One').click()
        
        //marcar e desmarcar 
        cy.get('#materialUnchecked').check().uncheck()

        //radiobutton - uncheck não funciona

        cy.get('#css').check()
    

    });



})