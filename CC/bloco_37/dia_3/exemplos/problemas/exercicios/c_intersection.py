""" 
Quais elementos da lista A tambem ocorrem na lista B?
Ou seja, qual é a intersecção entre as listas


listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]

resposta: [4, 5, 6]
 """

# listaA = [1, 2, 3, 4, 5, 6]
# listaB = [4, 5, 6, 7, 8, 9]
# result = [(x, y) for x in listaA for y in listaB if x == y]
# interseccao = [x for x, y in result]
# print(result)
# print(interseccao)


def intersection(listA, listB):
    # seen_in_a = {}
    # for item in listA:
    #     if item not in seen_in_a:
    #         seen_in_a[item] = True
    # print(seen_in_a)
    ans = []
    for item in listB:
        if item in listA:
            ans.append(item)

    return ans
