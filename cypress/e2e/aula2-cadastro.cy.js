describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="register-button"]').click();
  });

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Jarbas da Costa');
    cy.get('[data-test="input-email"]').type('jarbas@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
  it('Não preencher os campos do formulário para cadastrar um novo usuário', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
  it('Preencher os campos do formulário incorretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Jarbas da Costa');
    cy.get('[data-test="input-email"]').type('jarbas');
    cy.get('[data-test="input-password"]').type('Senha');
    cy.get('[data-test="input-confirm-password"]').type('se');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    cy.contains('As senhas não batem').should('be.visible');
  })    
})