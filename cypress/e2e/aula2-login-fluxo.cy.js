describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
    });

    it('Verifica se o login funciona ao clicar no icone de mensagem', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('jarbas@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.get('.header__user').should('be.visible');
        })
})