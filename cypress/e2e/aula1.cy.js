describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Jarbas da Costa');
    cy.get('input[name="email"]').type('jarbas@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();

  })
  
  it('Visita a página de principal do AdoPet e clica no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.button').click;
  });

  it('Visita a página de principal do AdoPet e teste os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.header__home')
    cy.get('.header__message')
  });

  it('Visita a página de /login do Adopet;', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  });

  it('Visite a página de /home do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  });

  it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a', 'Falar com responsável').click();
  });
})