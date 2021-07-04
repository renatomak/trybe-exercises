""" try:
  file = open('arquivo.txt', mode="w")

except OSError:
  print('arquivo inexistente')
else:
  LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
  file.writelines(LINES)
  file.close() """

try:
  file = open('arquivo.txt', mode="r")

except OSError:
  print('arquivo inexistente')
else:
  for line in file:
    if int(line.split()[1]) >= 6:
      print(line.split()[0])  # não esqueça que a quebra de linha também é um caractere da linha
  file.close()