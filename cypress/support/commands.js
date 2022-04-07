/// <reference types="cypress" />

Cypress.Commands.add("bookSearch", (query) => {
  cy.request({
    url: "https://www.googleapis.com/books/v1/volumes",
    qs: {
      q: "intitle:" + query,
    },
  });
});

Cypress.Commands.add("bookSearchISBN", (query) => {
  cy.request({
    url: "https://www.googleapis.com/books/v1/volumes",
    qs: {
      q: query,
    },
  });
});
