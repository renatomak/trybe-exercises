# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.


# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def good_combinations(array):
    size = len(array)
    # result = []
    # for x in range(size):
    #     for y in range(size):
    #         if array[x] == array[y] and y != x and y > x:
    #             result.append((x, y))
    # return result
    result = [(x, y) for x in range(size)
              for y in range(size) if array[x] == array[y] and y > x]
    return len(result)


print(good_combinations(produtos))
