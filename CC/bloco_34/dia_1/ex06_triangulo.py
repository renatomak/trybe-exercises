a = int(input())
b = int(input())
c = int(input())

def check_triangle(a, b, c):
  if a + b > c:
    if a == b and a == c:
      print('Triângulo Equilátero')
    elif (a != b and a != c and b != c):
      print('Triângulo Escaleno')
    elif ( a == b or a == c or b == c):
      print('Triângulo Isósceles')
  else:
    print('não é triangulo')

check_triangle(a, b, c)