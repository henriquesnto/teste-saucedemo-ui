/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Login Realizado com Sucesso', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')

    })

    it('Login Usuário Invalido', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standarduser')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('Login Senha Invalido', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secretsauce')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('Login Usuário em Branco', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').click()
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')

    })

    it('Login Senha em Branco', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').click()
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')

    })

    
})