""" Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array 
numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo 
uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:
 """
# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def mesclar_baralho(array):
    divide = len(array) // 2

    array_um = array[:divide]
    array_dois = array[divide:]
    print(array_um, array_dois)
    # array_result = [[row[i] for row in [array_um, array_dois]] for i in range(3)]
    array_result = list(zip(*[array_um, array_dois]))
    array_result = [num for elem in array_result for num in [*elem]]

    return array_result


print(mesclar_baralho(cartas))
