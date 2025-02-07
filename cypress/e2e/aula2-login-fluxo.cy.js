describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
    });

    it('Verifica se o login funciona ao clicar no icone de mensagem', () => {
        cy.get('.header__message').click();
        cy.login('jarbas@email.com', 'Senha123');
        cy.url().should('include', '/home');
    })
})