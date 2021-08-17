""" Exercício 6: Dada uma string, construa um dicionário
 com a contagem de cada carácter da palavra. Utilize o 
 pseudocódigo e o exemplo abaixo para se nortear. """
import collections
str = "bbbbaaaacccaaaaaaddddddddccccccc"
results = collections.Counter(str)
print(results)
