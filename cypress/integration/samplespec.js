describe('My Passing Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('Visiting URL', () => {
    it('finds the content "type" ', () => {
        cy.visit('http://localhost:3000/dashboard')
        cy.contains('type')
    })
})
