/**
 * Author: Bernice Templeman
 * Date: 7/18/2024
 * File Name: HouseArcadia-whatabook-queries.js
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

// Display wishlist items for a customer
db.customers.find({ customerId: "c1001" }, { wishlistitems: 1 })

// Add books to a customer’s wishlist: https://www.mongodb.com/docs/manual/reference/operator/update/push/
db.customers.updateOne({customerId: "c1001"}, {$push: {wishlistitems: {bookId: "ISBN-978-0590353403", genre: "Fantasy", title: "Harry Potter", author: "J.K. Rowling"}}})

// Remove book from a customer’s wishlist: https://www.mongodb.com/docs/manual/reference/operator/update/pull/
db.customers.updateOne({customerId: "c1001"}, {$pull: {wishlistitems: {bookId: "ISBN-978-0590353403"}}})