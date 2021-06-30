numOne = int(input('Numero Um: '))
numTwo = int(input('Numero Dois: '))

def larger(a, b):
    if a > b: 
        return a
    else: 
        return b

print('Maior: ', larger(numOne, numTwo))