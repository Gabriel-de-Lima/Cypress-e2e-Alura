describe('Login no site Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('jarbas@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.get('.header__user').should('be.visible');
        })
})