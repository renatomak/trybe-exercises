""" Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array 
numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo 
uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:
 """
# Exemplo 1:
# decks = [2, 6, 4, 5]
# decks por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
decks = [1, 4, 4, 7, 6, 6]
# decks por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def merge_deck(array):
    half_array = len(array) // 2

    array_one = array[:half_array]
    array_two = array[half_array:]
    # array_result = [[row[i] for row in [array_one, array_two]] for i in range(3)]
    array_result = list(zip(*[array_one, array_two]))
    array_result = [num for elem in array_result for num in [*elem]]

    return array_result


print(merge_deck(decks))
