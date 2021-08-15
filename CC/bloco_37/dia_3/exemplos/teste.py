def get_address(id_num):
    divider = 10
    quotient = (id_num // divider) * divider
    return (id_num % divider) + quotient


array = [11, 15, 23, 24, 19, 33, 34, 40, 5, 8, 2]


for x in array:
    print(get_address(x))
