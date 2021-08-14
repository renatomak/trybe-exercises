""" Exercício 1 Em um software monitor, que verifica a resiliência de outro 
software, precisamos saber qual o tempo máximo que um software permaneceu 
sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema 
e verificamos se está ok. Supondo um array que contenha os estados coletados 
por nosso software, calcule quanto tempo máximo que o servidor permaneceu 
sem instabilidades. """

#  - OK
#  - Instabilidades

from typing import SupportsRound


valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def max_stable_server_time(array):
    count_sequence = []
    count = 0
    for index in range(len(array)):
        if array[index] == 1:
            count += 1
        else:
            count_sequence.append(count)
            count = 0
    if (count != 0):
        count_sequence.append(count)

    if len(count_sequence) > 0:
        return max(count_sequence)
    return 0


print(max_stable_server_time(valores_coletados))
