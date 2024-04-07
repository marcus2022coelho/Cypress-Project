/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import cadastro_page from '../support/pages/cadastro_page';

const user_data = require('../fixtures/desafio.json')



describe('Cadastro de usuario', () => {

    beforeEach('Acessando página de cadastro', () => {
       // cy.acessarPaginaHome()  < usando o commands 
       home_page.acessarPaginaHome()  // usando a funcao javascript

    })

    it('validar campo nome vazio', () => {

        //clicar no registrar
        cy.clicarCadastro()
        //validou se ao tocar em cadastrar, retornou mensagem
        cy.validarMensagem('O campo nome deve ser prenchido')
    })
    it.only('validar campo email vazio', () => {

        //clicar no campo nome e colocar o nome   <<< it usando javascript e não commands no page object
        
        cadastro_page.preencherName(faker.person.fullName())
        cadastro_page.clicarCadastro()

        //validar mensagem de erro
        //cy.get('#errorMessageFirstName')
        //.then((element) => {
        //    expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
        
        cadastro_page.validarMensagem('O campo e-mail deve ser prenchido corretamente')
    })

    it('validar campo senha vazio', () => {

        cy.preencherName(faker.person.firstName())
        cy.preencherEmail(user_data.email)
        cy.clicarCadastro()

        //validar mensagem de erro
        cy.validarMensagem('O campo senha deve ter pelo menos 6 dígitos')
    
    });

    it('Vaidar campo senha inválido, menos de 6 numeros', () => {

        cy.preencherName(user_data.name)
        cy.preencherEmail(user_data.email)
        cy.preencherSenha('12345')

        cy.clicarCadastro()

        //validar mensagem

        cy.validarMensagem('O campo senha deve ter pelo menos 6 dígitos')

    });

    it('validar cadastro realizado com sucesso', () => {

        const name = faker.person.firstName()

        cy.preencherName(name)
        cy.preencherEmail(faker.internet.email())
        cy.preencherSenha('123456')

        cy.clicarCadastro()

        //validar mensagem
        cy.validarMensagemSucesso('Cadastro realizado!')
            })


    });
