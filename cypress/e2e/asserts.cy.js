/// <reference types="cypress" />

describe('Asserts', () => {

    it('Verificar se está visível', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()
        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')


        // utilizar um texto que capturado para realizar o assert

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                // ou
                expect(element).to.be.visible
            })




    })
})