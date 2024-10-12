/**
 * Author: Bernice Templeman
 * Date: 7/18/2024
 * File Name: Bernice-Templeman-whatabook-queries.js
 * Description: MongoDB Shell Scripts for the books and customers collections
 */

// Write a query to display a list of books.
db.books.find()

// Write a query to display a list of books by genre.
db.books.find({"genre": "Fantasy"})

// Write a query to display a list of book by author.
db.books.find({"author": "Arnaud Lauret"})

// Write a query to display a book by bookId.
db.books.findOne({"bookId": "ISBN-9781945631376"})