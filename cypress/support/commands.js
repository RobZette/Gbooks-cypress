/// <reference types="cypress" />

Cypress.Commands.add("bookSearch", (query, limit) => {
  cy.request({
    url: "/books/v1/volumes",
    qs: {
      q: "intitle:" + query,
      maxResults: (limit = 5),
    },
  });
});

Cypress.Commands.add("bookSearchISBN", (query) => {
  cy.request({
    url: "/books/v1/volumes",
    qs: {
      q: "isbn:" + query,
    },
  });
});

Cypress.Commands.add("getBook", (id) => {
  cy.request({
    url: `/books/v1/volumes/${id}`,
    failOnStatusCode: false,
  });
});
