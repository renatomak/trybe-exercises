""" Separe as palavras de acordo com a sua letra inicial

text = ['ana', 'ama', 'joão', 'que', 'ama', 'jose, 'mas', 'jose', 'não', 'ama', 'ana']

resposta:
a: ['ana', 'ama', 'ama', 'ama', 'ama']
j: ['joão', 'jose', 'jose']
q: ['que']
m: ['mas']
n: ['não']

 """


def screening(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)
    return screen
