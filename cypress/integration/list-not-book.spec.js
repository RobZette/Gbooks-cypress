/// <reference types="cypress" />

describe("Test non passant d'obtention d'une liste de livres", () => {
  it("test", () => {
    cy.bookSearch("badQuery").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.totalItems).to.eql(0);
      console.log(response.body)

    });
  });
});
