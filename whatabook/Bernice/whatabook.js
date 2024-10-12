/**
	  Title: whatabook.js
    Author: Professor Krasso
            Bernice Templeman
    Date: 18 August 2024
    Description: MongoDB Shell Scripts for the books and customers colections
    Attribution: houses.js by Professor Krasso
 */

// Delete the houses and students collections.
db.books.drop();
db.customers.drop();

// Create the houses and students collections using Document Validation.
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        bookId: {
          bsonType: "string",
        },
        title: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        customerId: {
          bsonType: "string",
        },
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        wishlistitems: {
          bsonType: "array",
          properties: {
            bookId: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
});

// Books
webapis = {
  bookId: "ISBN-9781517295102",
  title: "The Design of Web APIs",
  author: "Arnaud Lauret",
  genre: "Technology",
};

nosql = {
  bookId: "ISBN-9780321826626",
  title: "NoSQL Distilled",
  author: "Pramod J. Sadalage & Martin Fowler",
  genre: "Technology",
};

// Insert the documents.
db.books.insertOne(webapis);
db.books.insertOne(nosql);

// customers
hermione = {
  customerId: "c1001",
  firstName: "Hermione",
  lastName: "Granger",
  wishlistitems: [
    {
      bookId: "ISBN-9781517295102",
    },
    {
      bookId: "ISBN-9780321826626",
    },
  ],
};

harry = {
  customerid: "c1002",
  firstName: "Harry",
  lastName: "Potter",
  wishlistitems: [
    {
      bookId: "ISBN-9781517295102",
    },
    {
      bookId: "ISBN-9780321826626",
    },
  ],
};

// Insert the documents.
db.customers.insertOne(hermione);
db.customers.insertOne(harry);
