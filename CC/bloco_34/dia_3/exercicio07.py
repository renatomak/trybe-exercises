from pymongo import MongoClient

client = MongoClient()

db = client.library

books = db.books

# category = input('Escolha a categoria: ')

categories = {}
for book in db.books.find({ 'status': 'PUBLISH'}, { 'title': 1, '_id': 0 }):
  category = book['title']
  if not categories.get(category):
    categories[category] = 0
  categories[category] += 1


print(categories)
client.close()

