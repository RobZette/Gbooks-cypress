/// <reference types="cypress" />

describe("Test", () => {
  it("Test non passant d'obtention d'une liste de livres", () => {
    cy.bookSearch("badQuery").then((response) => {
      expect(response.status).to.eql(200)
      expect(response.body.totalItems).to.eql(0)
    })
  })
})
