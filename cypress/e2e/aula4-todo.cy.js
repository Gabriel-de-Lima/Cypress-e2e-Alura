describe('Exemplo todo-cypress', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    });
    
    it('Consegue deletar a primeira as tarefas', () => {
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.contains('Clear completed').click()
        cy.get('.todo-list li').should('have.length', 1).should('not.have.text', 'Pay eletric bill')
        cy.contains('Clear completed').should('not.exist')
    })

    it('Para filtrar tarefas completas', () => {
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.get('.filters > :nth-child(3) > a').click()
        cy.contains('Walk the dog').should('not.exist')

    })

})