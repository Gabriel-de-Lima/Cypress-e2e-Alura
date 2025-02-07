describe('Login no site Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('jarbas@email.com', 'Senha123')
        cy.url().should('include', '/home');
    })

    it('Falha no login, o email não foi preenchido corretamente', () => {
        cy.login('jarbas', ' ')
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    })

    it('Falha no login do sistema, senha não atende o padrão', () => {
        cy.login('jarbas@email.com', 'Senha')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Falha no login do sistema, credenciais não conferem', () => {
        cy.login('jarbas@email.com', 'Senha321')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

    it('Falha no login do sistema, campos não preenchidos', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })
})