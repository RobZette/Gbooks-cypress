/// <reference types="cypress" />
const schema=
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string"
    },
    "totalItems": {
      "type": "integer"
    },
    "items": {
      "type": "array",
      "items": "array"
    }
  }};
describe(" tests", () => {
  it("test", () => {
    cy.bookSearch("The way of Kings").then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200)
      expect(response.body).to.not.be.null
      // expect(response.body).to.have.jsonSchema(schema);
      expect(response.body.items).to.deep.eq("The way of Kings")
    });
  });
});
