import json
import csv

with open('books.json') as file:
  books = [json.loads(line) for line in file]
  
  categories = {}
  for book in books:
    for category in book["categories"]:
        if not categories.get(category):
          categories[category] = 0
        categories[category] += 1

total_books = len(books)

results = {}
for category in categories:
  results[category] = categories[category] / total_books

with open('file_csv.csv', 'w') as file:
  header = ['categoria', 'porcentagem']
  writer = csv.writer(file)
  writer.writerow(header)

  for category in results:
    row = [category, results[category]]
    writer.writerow(row)
    print(row)







"""
def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [[category, num_books / total_books]
             for category, num_books in book_count_by_category]


def write_csv_report(file, headers, rows):
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(book_count_by_category, number_of_books)

    # write csv
    headers = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, headers, books_percentage_rows) """
