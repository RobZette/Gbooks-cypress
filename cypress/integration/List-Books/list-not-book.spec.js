/// <reference types="cypress" />

describe("Failed test for obtaining a list of books", () => {
  it("should return an ampty result", () => {
    cy.bookSearch("badQuery").then((response) => {
      expect(response.status).to.eql(200)
      expect(response.body.totalItems).to.eql(0)
    })
  })
})
