/// <reference types="cypress" />

describe(" tests", () => {
  it("test", () => {
    cy.bookSearch("9782848654706").then((response) => {
      cy.log(response.body);
    });
  });
});
