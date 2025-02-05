describe('Página inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()

    });
    it("deve testar os botão de home", () => {
        cy.get('.header__home').click()
    })
    it("Deve testar os botão de mensagens", () => {
        cy.get('.header__message').click()
    })
    it('Verifica se o title com o texto “AdoPet” está presente no html', () => {
        cy.title().should('eq', 'AdoPet')
    });
    it('Verifica se o texto “Quem ama adota!” está presente no html', () => {
        cy.contains('Quem ama adota!').should('be.visible')
    });
    it('Verifica se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    });
    it('Verifica texto no botão que redireciona para home', () => {
        cy.contains('a', 'Ver pets disponíveis para adoção').should('be.visible')
    });
});