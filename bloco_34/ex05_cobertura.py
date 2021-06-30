size = int(input('Tamanho da parede: '))

def budget(n):
    quantity_cans = n/18
    return quantity_cans, quantity_cans*80

result = budget(size)
print(type(result))