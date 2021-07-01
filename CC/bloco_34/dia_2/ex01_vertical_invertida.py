name = input('Informe um nome: ')

def print_string_vertically_inverted(string):
  size = len(string)

  for i in range(0, size):
    print(string[0:size-i])


print_string_vertically_inverted(name)