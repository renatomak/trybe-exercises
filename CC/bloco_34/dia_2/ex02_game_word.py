import random
words = ['familia', 'tecnologia', 'inglês', 'teoria', 'figado']

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

to_choose_word(words)