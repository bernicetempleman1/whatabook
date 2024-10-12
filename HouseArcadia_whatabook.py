"""
Author: Bernice Templeman
        Sheldon Skaggs
        Meher Salim
Date: 07/23/2024
File Name: HouseArcadia_whatabook.py
Description: Console Application Requirements: Python program that connects to web335DB database
Attributions: Professor Krasso course and book
              Agrawal, A: Python Menu: https://medium.com/@anushagrawal01/building-an-interactive-python-menu-for-executing-commands-2e8a6b028a38

mongosh "mongodb+srv://bellevueuniversity.lftytpq.mongodb.net/" --apiVersion 1 --username <db_username>
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection string to connect to
client = MongoClient(
    'mongodb+srv://web335_user:s3cret@bellevueuniversity.lftytpq.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity')

# Configure a variable to access the web335DB
db = client['whatabook']

# Display main menu
def main_menu():
    print()
    print("Main Menu: ")
    print("1. View All Books")
    print("2. View Books by Genre")
    print("3. View wishlist by Customer Id")
    print("4. Exit")

    choice = input("\nPlease Select a choice: ")

    if choice == '1':
        print_books()
    elif choice == '2':
        genre_menu()
    elif choice == '3':
        print_wishlist()
    elif choice == '4':
        print("\nThank you")
        exit()
    else:
        print("\nInvalid choice.")
    main_menu()

# Display a list of books.
def print_books():
    print("\nList of all books:")
    for book in db.books.find({}, {'_id': 0, 'bookId': 1, 'title': 1, 'author': 1, 'genre': 1}):
        print("")
        print("Book Id: " + book["bookId"])
        print("\tTitle: " + book["title"])
        print("\tAuthor: " + book["author"])
        print("\tGenre: " + book["genre"])

# Display menu for genre
def genre_menu():
    # Create an array of distinct book genres
    bookGenres = db.books.distinct('genre')

    # Create a counter to use with genre list
    genreNumber = 1

    print()
    print("Select a Genre to Display Books")

    # Loop through the array of book genres to give a list of options
    for genre in bookGenres:
        print(f"{genreNumber}. {genre}")
        genreNumber = genreNumber + 1
    print(f"{genreNumber}. Exit")
    choice = input("\nPlease Select a choice: ")

    # Handle user's choice
    if choice.isnumeric():
        nChoice = int(choice)
        if nChoice >= 1 and nChoice <= (genreNumber - 1):
            genre = bookGenres[nChoice - 1]
            print("\nList of books in genre:", genre)
            for book in db.books.find({'genre': genre}, {'_id': 0, 'bookId': 1, 'title': 1, 'author': 1, 'genre': 1}):
                print("")
                print("Book Id: " + book["bookId"])
                print("\tTitle: " + book["title"])
                print("\tAuthor: " + book["author"])
                print("\tGenre: " + book["genre"])
        elif int(choice) == genreNumber:
            print("\nThank you")
            exit
        else:
            print("\nInvalid choice.")
            genre_menu()
    else:
        print("\nInvalid non-numerical choice.")
        genre_menu()

# print wishlistitems for customer
def print_wishlist():
    customer = input('Please enter your customer id (c1001 - c1007): ')
    if db.customers.count_documents({'customerId': customer}, limit=1) != 0:
        print("")
        pipeline = [{"$match": {"customerId": customer}}]
        results = db.customers.aggregate(pipeline)

        # A loop that prints the results
        for customer in results:
            print("Customer Id: " + customer["customerId"] + "\nName: " +
                  customer["firstName"] + " " + customer["lastName"])

            # A loop to print the wishlist
            print("Wishlist:")

            for x in customer["wishlistitems"]:
                print("")
                print("Book Id: " + x["bookId"])
                print("\tTitle: " + x["title"])
                print("\tAuthor: " + x["author"])
                print("\tGenre: " + x["genre"])
    else:
        print("")
        print("Please enter a valid customer id.")
        print_wishlist()

# main
def main():
    main_menu()

if __name__ == "__main__":
    main()
