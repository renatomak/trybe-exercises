import random
""" try:
  file = open('file.txt', 'w')

except OSError:
  print('Arquivo inexistente')

else: 
  file.write('Macado\n')
  file.write('cobra\n')
  file.write('passaro\n')
  file.write('baleia\n')
  file.write('cavalo\n')
  file.write('galinha\n')
  file.close() """

def to_choose_word(words):
  word = random.choice(words)

  scrambled_word = "".join(random.sample(word, len(word)))
  print(scrambled_word)
  answer=''
  i = 1
  
  print('adivinhe a palavra: ', scrambled_word)
  print('Sua resposta: ')
  while(i <= 3):
    answer= input()
    if (answer != word):
      if i == 3:
        print('Você FALOU! Recomeçe novamente...')
      else:
        print('Você errou!!!\n Restam ', 3-i, 'chances. \n Sua nova resposta: ')
    else:
      print('Você acertou! A palavra é', answer)
      break
    i+=1

try:
  file = open('file.txt', 'r')
except OSError:
  print('Arquivo inexistente')
else:
  content = []
  for line in file:
    print(line)
    content += [line[0:len(line)-1]]
  print(content)
  to_choose_word(content)
  file.close()