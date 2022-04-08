/// <reference types="cypress" />

describe("Failed book access test", () => {
  it("should return a 503 error", () => {
    cy.getBook("badID").then((resp) => {
      expect(resp.status).to.eql(503);
    });
  });
});
