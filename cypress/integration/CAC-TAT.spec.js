/// <reference types="Cypress" />
// o atributo .only faz o cypress só executar o "it" com o .only

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach( () => {
        cy.visit('./src/index.html');
    })

    it('Verifica o título da aplicação', () =>  {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })


    it('Preenche os campos obrigatórios e envia o formulário', () => { 
        cy.get('#firstName', {  timeout: 5000 }).type('Pedro');
        cy.get('#lastName', { timeout: 5000 }).type('Santos');
        cy.get('#email', { timeout: 5000 }).type('pedro@pedro.com.br');
        cy.get('#open-text-area', {  timeout: 5000 }).type('Testando cypress');
        cy.get('button[type="submit"]', { timeout: 5000 }).click();
        cy.get('.success', {  timeout: 5000 }).should('be.visible');
    })

    it('Teste para mostrar que o teste continua executando mesmo após um dos testes darem erro', () => { 
        cy.get('#first', {  timeout: 5000 }).type('Pedro');
    })

    it('Preenche os campos obrigatórios e envia o formulário com erro', () => { 
      cy.get('#firstName', {  timeout: 5000 }).type('Pedro');
      cy.get('#lastName', { timeout: 5000 }).type('Santos');
      cy.get('#email', { timeout: 5000 }).type('pedro.pedro.com.br');
      cy.get('#open-text-area', {  timeout: 5000 }).type('Testando cypress');
      cy.get('button[type="submit"]', { timeout: 5000 }).click();
      cy.get('.error', {  timeout: 5000 }).should('be.visible');
    })

    it('Preenche e limpa os campos', () => { 
      cy.get('#firstName', {  timeout: 5000 }).type('Pedro').clear().type('Pedro depois de limpar');
      cy.get('#lastName', { timeout: 5000 }).type('Santos').clear().type('Santos depois de limpar');
      cy.get('#email', { timeout: 5000 }).type('pedro@pedro.com.br').clear().type('pedro@pedro.com.br depois de limpar');
      cy.get('#open-text-area', {  timeout: 5000 }).type('Testando cypress').clear().type('Testando cypress depois de limpar');
    })
})