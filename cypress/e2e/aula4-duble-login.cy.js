describe('Login no site Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
            statusCode:400, }).as('stubPost')
    });
    
    it('Falha no login do sistema, credenciais não conferem', () => {
        cy.login('jarbas@email.com', 'Senha321')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('jarbas@email.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

})