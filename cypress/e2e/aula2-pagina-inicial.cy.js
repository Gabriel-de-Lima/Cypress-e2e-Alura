describe('Página inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verifica se o title com o texto “AdoPet” está presente no html', () => {
        cy.title().should('eq','AdoPet')
    });
    it('Verifica se o texto “Quem ama adota!” está presente no html', () => {
        cy.contains('Quem ama adota!').should('be.visible')
    });
    it('Verifica se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    });
});