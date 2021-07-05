import requests
from parsel import Selector, selector
URL = 'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
res = requests.get(URL)
selector = Selector(text=res.text)

title = selector.css('.product_main h1::text').get()
price = selector.css('.price_color::text').re_first(r"\d+\.\d{2}")
desciption = selector.css("#product_description ~ p::text").get()[:-len(" ...more")]
url_img = selector.css('.active img::attr(src)').get()
url_img = URL + url_img
amount = selector.css('.instock::text').re_first('\d')

print(title, price,  desciption, url_img, amount, sep=', ')