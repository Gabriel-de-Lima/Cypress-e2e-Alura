describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzOGVhOWZjZi0zMzg2LTQ5MGUtYmVjYS0xODdjMTIwODZmZmMiLCJhZG9wdGVyTmFtZSI6IkphcmJhcyBkYSBDb3N0YSIsImlhdCI6MTczOTI1ODM3MSwiZXhwIjoxNzM5NTE3NTcxfQ.X2gaHhP2EMMV6YfRM6SD1zeKHLMTL5IQ7iQdR-b--9Y`
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/38ea9fcf-3386-490e-beca-187c12086ffc',
            headers: { authorization },
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        });
    });
    it('Nome do Perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/38ea9fcf-3386-490e-beca-187c12086ffc',
            headers: { authorization },
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Jarbas da Costa')
        });
    });
})