/// <reference types="cypress" />

describe("Passing test for obtaining a book with its ISBN code", () => {
  it("should return a book with corresponding ISBN", () => {
    let searchedIsbn = "2848654708";
    cy.bookSearchISBN(searchedIsbn).then((response) => {
      let volumeInfo = response.body.items[0].volumeInfo.industryIdentifiers;
      let isbn10;
      let isbn13;

      console.log(volumeInfo);

      if (volumeInfo[0].type == "ISBN_10") {
        isbn10 = volumeInfo[0].identifier;
        if (volumeInfo.length > 1) {
          isbn13 = volumeInfo[1].identifier;
        }
      } else {
        isbn10 = volumeInfo[1].identifier;
        if (volumeInfo.length > 1) {
          isbn13 = volumeInfo[0].identifier;
        }
      }

      expect(response.status).to.eq(200);

      if (searchedIsbn.length == 10) {
        expect(isbn10).to.eq(searchedIsbn);
      } else if (searchedIsbn.length == 13) {
        expect(isbn13).to.eq(searchedIsbn);
      }
    });
  });
});
