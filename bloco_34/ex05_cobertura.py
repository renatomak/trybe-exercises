size = int(input('Tamanho da parede: '))

def budget(n):
    quantity_cans = n/18
    return quantity_cans, quantity_cans*80

result = budget(size)
print(result)

""" GABARITO:
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price """