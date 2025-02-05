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

    it('Falha no login, o email não foi preenchido corretamente', () => {
        cy.get('[data-test="input-loginEmail"]').type('Jarbas da Costa');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    })

    it('Falha no login do sistema, senha não atende o padrão', () => {
        cy.get('[data-test="input-loginEmail"]').type('jarbas@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Falha no login do sistema, credenciais não conferem', () => {
        cy.get('[data-test="input-loginEmail"]').type('jarbas@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha321');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

    it('Falha no login do sistema, campos não preenchidos', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })
})