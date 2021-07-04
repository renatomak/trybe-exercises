import requests

response = requests.get('https://api.github.com/users')

for git in response.json():
  print(git['login'], git['url'])