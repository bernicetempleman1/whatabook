"""
Author: Bernice Templeman
        Sheldon Skaggs
        Meher Salim
Date: 07/23/2024
File Name: HouseArcadia_whatabook.py
Description: Console Application Requirements: Python program that connects to web335DB database
Attributions: Professor Krasso course and book
              Agrawal, A: Python Menu: https://medium.com/@anushagrawal01/building-an-interactive-python-menu-for-executing-commands-2e8a6b028a38

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
  print("Select: ")
  print("1. View All Books")
  print("2. View Books by Genre")
  print("3. View wishlist by Customer Id")
  print("4. Exit")

  choice = input("Please Select a choice: ")

  if choice == '1':
    print_books()
  elif choice == '2':
    genre_menu()
  elif choice == '3':
    print_wishlist()
  elif choice == '4':
    print("Thank you")
    exit()
  else:
    print("Invalid choice.")
  main_menu()

# Display a list of books.
def print_books():
    print("\nList of all books:")
    for book in db.books.find({}, {'_id': 0, 'bookId': 1, 'title': 1, 'author': 1, 'genre': 1}):
        print("")
        print("Book Id: " + book["bookId"] )
        print("\tTitle: " + book["title"] )
        print("\tAuthor: " + book["author"] )
        print("\tGenre: " + book["genre"] )

# Display menu for genre
def genre_menu():
  print()
  print("Select a Genre to Display Books")
  print("1. Technology")
  print("2. Science Fiction")
  print("3. Military History")
  print("4. Sports")
  print("5. Fantasy")
  print("6. Mystery")
  print("7. Romance")
  print("8. Exit")

  choice = input("Please Select a choice: ")

  if choice == '1':
    genre = "Technology"
  elif choice == '2':
    genre = "Science Fiction"
  elif choice == '3':
    genre = "Military History"
  elif choice == '4':
    genre = "Sports"
  elif choice == '5':
    genre = "Fantasy"
  elif choice == '6':
    genre = "Mystery"
  elif choice == '7':
    genre = "Romance"
  elif choice == '8':
    print("Thank you")
    exit()
  else:
    print("Invalid choice.")
    genre_menu()

  print("\nList of books in genre:", genre)
  for book in db.books.find({'genre': genre}, {'_id': 0, 'title': 1, 'genre': 1}):
    print(book)

# Display wishlist


def print_wishlist():
    customer = input('Please enter your customer id: ')
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
          print("Book Id: " + x["bookId"] )
          print("\tTitle: " + x["title"] )
          print("\tAuthor: " + x["author"] )
          print("\tGenre: " + x["genre"] )
    else:
        print("Please enter a valid customer id.")

def main():
  main_menu()

if __name__ == "__main__":
  main()

