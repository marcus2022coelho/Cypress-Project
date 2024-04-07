/// <reference types="cypress"/>

export default {
    acessarPaginaHome() {

        //acessar a aplicacao
        cy.visit('/')
            .get('.top_header_right')

            //clicou na tela de registro
            .contains('Cadastro').click()

    }

}