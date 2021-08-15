""" Exercício 7: Utilize o dicionário criado no exercício 
5. Para as chaves ímpares, não queremos mais mapear 
para o seu sobro, mas sim, para o seu triplo.
Consulte o método keys() e atualize o seu dicionário
para a nova regra. """

result = {x: x*2 for x in range(3, 20)}
print(result)
