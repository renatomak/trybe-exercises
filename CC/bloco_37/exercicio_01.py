#  - OK
#  - Instabilidades

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

    return max(count_sequence)


print(max_stable_server_time(valores_coletados))
