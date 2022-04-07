/// <reference types="cypress" />

describe(" tests", () => {
  it("test", () => {
    cy.bookSearch("The way of Kings").then((response) => {
      cy.log(response.body);
    });
  });
});
