describe('Página inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verifica texto no botão que redireciona para home', () => {
        cy.contains('a', 'Ver pets disponíveis para adoção').should('be.visible')
    });
});