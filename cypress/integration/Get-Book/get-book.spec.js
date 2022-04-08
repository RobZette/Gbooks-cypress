/// <reference types="cypress" />

const schema = {
  type: "object",
  properties: {
    kind: {
      type: "string",
    },
    id: {
      type: "string",
    },
    etag: {
      type: "string",
    },
    selfLink: {
      type: "string",
    },
    volumeInfo: {
      type: "object",
      properties: {
        title: {
          type: "string",
        },
        authors: {
          type: "array",
          items: [
            {
              type: "string",
            },
          ],
        },
        publisher: {
          type: "string",
        },
        publishedDate: {
          type: "string",
        },
        description: {
          type: "string",
        },
        industryIdentifiers: {
          type: "array",
          items: [
            {
              type: "object",
              properties: {
                type: {
                  type: "string",
                },
                identifier: {
                  type: "string",
                },
              },
              required: ["type", "identifier"],
            },
            {
              type: "object",
              properties: {
                type: {
                  type: "string",
                },
                identifier: {
                  type: "string",
                },
              },
              required: ["type", "identifier"],
            },
          ],
        },
        readingModes: {
          type: "object",
          properties: {
            text: {
              type: "boolean",
            },
            image: {
              type: "boolean",
            },
          },
          required: ["text", "image"],
        },
        pageCount: {
          type: "integer",
        },
        printedPageCount: {
          type: "integer",
        },
        dimensions: {
          type: "object",
          properties: {
            height: {
              type: "string",
            },
            width: {
              type: "string",
            },
            thickness: {
              type: "string",
            },
          },
          required: ["height", "width", "thickness"],
        },
        printType: {
          type: "string",
        },
        categories: {
          type: "array",
          items: [
            {
              type: "string",
            },
          ],
        },
        averageRating: {
          type: "integer",
        },
        ratingsCount: {
          type: "integer",
        },
        maturityRating: {
          type: "string",
        },
        allowAnonLogging: {
          type: "boolean",
        },
        contentVersion: {
          type: "string",
        },
        imageLinks: {
          type: "object",
          properties: {
            smallThumbnail: {
              type: "string",
            },
            thumbnail: {
              type: "string",
            },
          },
          required: ["smallThumbnail", "thumbnail"],
        },
        language: {
          type: "string",
        },
        previewLink: {
          type: "string",
        },
        infoLink: {
          type: "string",
        },
        canonicalVolumeLink: {
          type: "string",
        },
      },
      required: [
        "title",
        "authors",
        "publisher",
        "publishedDate",
        "description",
        "industryIdentifiers",
        "readingModes",
        "pageCount",
        "printedPageCount",
        "dimensions",
        "printType",
        "categories",
        "averageRating",
        "ratingsCount",
        "maturityRating",
        "allowAnonLogging",
        "contentVersion",
        "imageLinks",
        "language",
        "previewLink",
        "infoLink",
        "canonicalVolumeLink",
      ],
    },
    saleInfo: {
      type: "object",
      properties: {
        country: {
          type: "string",
        },
        saleability: {
          type: "string",
        },
        isEbook: {
          type: "boolean",
        },
      },
      required: ["country", "saleability", "isEbook"],
    },
    accessInfo: {
      type: "object",
      properties: {
        country: {
          type: "string",
        },
        viewability: {
          type: "string",
        },
        embeddable: {
          type: "boolean",
        },
        publicDomain: {
          type: "boolean",
        },
        textToSpeechPermission: {
          type: "string",
        },
        epub: {
          type: "object",
          properties: {
            isAvailable: {
              type: "boolean",
            },
          },
          required: ["isAvailable"],
        },
        pdf: {
          type: "object",
          properties: {
            isAvailable: {
              type: "boolean",
            },
          },
          required: ["isAvailable"],
        },
        webReaderLink: {
          type: "string",
        },
        accessViewStatus: {
          type: "string",
        },
        quoteSharingAllowed: {
          type: "boolean",
        },
      },
      required: [
        "country",
        "viewability",
        "embeddable",
        "publicDomain",
        "textToSpeechPermission",
        "epub",
        "pdf",
        "webReaderLink",
        "accessViewStatus",
        "quoteSharingAllowed",
      ],
    },
  },
  required: [
    "kind",
    "id",
    "etag",
    "selfLink",
    "volumeInfo",
    "saleInfo",
    "accessInfo",
  ],
};

describe("Passing test for access to a book", () => {
  it("should return a book with corresponding ID", () => {
    cy.getBook("TWKQPwAACAAJ").then((resp) => {
      expect(resp.status).to.eql(200);
      expect(resp.body).to.not.be.null;
      expect(resp.body).to.be.jsonSchema(schema);
      expect(resp.body.id).to.eql("TWKQPwAACAAJ");
      expect(resp.body.volumeInfo.title).to.eql("Fondation");
      expect(resp.body.volumeInfo.authors[0]).to.eql("Isaac Asimov");
    });
  });
});
