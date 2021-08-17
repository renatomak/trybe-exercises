""" Exercício 4 Dado dois arrays de números inteiros que representam 
instantes de entrada e saídas em uma biblioteca e um número que represente 
um instante a ser buscado. Retorne quantas pessoas estudantes estão na 
biblioteca naquele instante. Considere que todo estudante que entrou, 
saiu da biblioteca. """

entradas = [1, 2, 3]
saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def how_many_people_right_now(input_array, output_array, instant):
    count = 0
    # for i in range(len(output_array)):
    #     if (input_array[i] <= instant <= output_array[i]):
    #         count += 1
    for x, y in list(zip(input_array, output_array)):
        if x <= instant <= y:
            count += 1

    return count


print(how_many_people_right_now(entradas, saidas, 4))
