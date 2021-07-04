from pymongo import MongoClient

client = MongoClient()

db = client.library

books = db.books

category = input('Escolha a categoria: ')

for book in db.books.find({ "categories": category }, { 'title': 1, '_id': 0 }):
  print(book['title'])

client.close()