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
    cy.bookSearch("The way of Kings", 3).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200)
      expect(response.body).to.not.be.null
      // expect(response.body).to.have.jsonSchema(schema);
       cy.validateSchema(schema, response.body);
      expect(response.body.items[0].volumeInfo.title).to.deep.eq("The Way of Kings")
      expect(response.body.items.length).to.deep.eq(3)
    });
  });
});
