/**
	Title: HouseArcadia-whatabook.js
    Author: Professor Krasso
            Bernice Templeman
    Edits Made By: Sheldon Skaggs and Meher Salim
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

daybreak2250aD = {
  bookId: "ISBN-9780441139897",
  title: "Daybreak-2250 A.D.",
  author: "Andre Norton",
  genre: "Science Fiction",
};

gitVCEveryone = {
  bookId: "ISBN-9781849517522",
  title: "Git: Version Control for Everyone",
  author: "Ravishankar Somasundaram",
  genre: "Technology",
};

submarineWarriors = {
  bookId: "ISBN-9780553285451",
  title: "Submarine Warriors",
  author: "Edwyn Gray",
  genre: "Military History",
};

benHoganFiveLessons = {
  bookId: "ISBN-9788828374572",
  title: "Ben Hoganâ€™s Five Lessons: The Modern Fundamentals of Golf",
  author: "Ben Hogan",
  genre: "Sports",
};

whoGoesThere = {
  bookId: "ISBN-9780982332207",
  title: "Who Goes There?",
  author: "John W. Campbell Jr.",
  genre: "Science Fiction",
};

briefCases = {
  bookId: "ISBN-9780451492128",
  title: "Brief Cases",
  author: "Jim Butcher",
  genre: "Fantasy",
};

vampireAcademy = {
  bookId: "ISBN-9781595141743",
  title: "Vampire Academy",
  author: "Richelle Mead",
  genre: "Fantasy",
};

throneOfGlass = {
  bookId: "ISBN-9781599906959",
  title: "Throne of Glass",
  author: "Sarah J. Maas",
  genre: "Fantasy",
};

poisonStudy = {
  bookId: "ISBN-9780375834686",
  title: "Poison Study",
  author: "Maria V. Snyder",
  genre: "Fantasy",
};

anEmberInTheAshes = {
  bookId: "ISBN-9781595148049",
  title: "An Ember in the Ashes",
  author: "Sabaa Tahir",
  genre: "Fantasy",
};

fallingKingdoms = {
  bookId: "ISBN-9781595145840",
  title: "Falling Kingdoms",
  author: "Morgan Rhodes",
  genre: "Fantasy",
};

aHoeLotOfTrouble = {
  bookId: "ISBN-9780062026398",
  title: "A Hoe Lot of Trouble",
  author: "Heather Webber",
  genre: "Mystery",
};

deadEye = {
  bookId: "ISBN-9781948253032",
  title: "Dead Eye: A Tiger's Eye Mystery",
  author: "Alyssa Day",
  genre: "Mystery",
};

noMoreSecrets = {
  bookId: "ISBN-9781945631376",
  title: "No More Sectets",
  author: "Lucy Score",
  genre: "Romance",
};

// Insert the documents.
db.books.insertOne(webapis);
db.books.insertOne(nosql);
db.books.insertOne(vampireAcademy);
db.books.insertOne(throneOfGlass);
db.books.insertOne(poisonStudy);
db.books.insertOne(anEmberInTheAshes);
db.books.insertOne(fallingKingdoms);
db.books.insertOne(aHoeLotOfTrouble);
db.books.insertOne(deadEye);
db.books.insertOne(noMoreSecrets);

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

sam = {
  customerid: "c1003",
  firstName: "Samwise",
  lastName: "Gamgee",
  wishlistitems: [
    {
      bookId: "ISBN-9780451492128",
    },
    {
      bookId: "ISBN-9780441139897",
    },
  ],
};

rosie = {
  customerId: "c1004",
  firstName: "Rosie",
  lastName: "Cotton",
  wishlistitems: [
    {
      bookId: "ISBN-9780982332207",
    },
    {
      bookId: "ISBN-9780451492128",
    },
    {
      bookId: "ISBN-9780441139897",
    },
  ],
};

theo = {
  customerId: "c1005",
  firstName: "Theo",
  lastName: "Alister",
  wishlistitems: [
    {
      bookId: "ISBN-9781849517522",
    },
    {
      bookId: "ISBN-9780553285451",
    },
  ],
};

marie = {
  customerId: "c1006",
  firstName: "Marie",
  lastName: "Antony",
  wishlistitems: [
    {
      bookId: "ISBN-9788828374572",
    },
    {
      bookId: "ISBN-9780982332207",
    },
  ],
};

lily = {
  customerId: "c1007",
  firstName: "Lily",
  lastName: "Moon",
  wishlistitems: [
    {
      bookId: "ISBN-9780451492128",
    },
    {
      bookId: "ISBN-9781595141743",
    },
  ],
};

// Insert the documents.
db.customers.insertOne(hermione);
db.customers.insertOne(harry);
db.customers.insertOne(sam);
db.customers.insertOne(rosie);
db.customers.insertOne(theo);
db.customers.insertOne(marie);
db.customers.insertOne(lily);
