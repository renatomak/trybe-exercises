import requests
from parsel import Selector, selector

res = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')
selector = Selector(text=res.text)

title = selector.css('.product_main h1::text').get()
price = selector.css('.price_color::text').re_first(r"\d+\.\d{2}")
desciption = selector.css("#product_description ~ p::text").get()[:-len("...more")]

print(title+',', price+',',  desciption)