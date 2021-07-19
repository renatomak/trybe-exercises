import json
import scrapy

name = 'quotes-ajax'
base_url = 'http://quotes.toscrape.com/api/quotes?page=%d'
start_urls = [base_url % 1]


def parse(self, response):
    json_data = json.loads(response.text)
    for quote in json_data['quotes']:
        yield quote
    if json_data['has_next']:
        next_page = self.base_url % (int(json_data['page']) + 1)
        print(next_page)
        yield scrapy.Request(url=next_page, callback=self.parse)


parse()
