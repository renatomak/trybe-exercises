# string = 'HOME-SWEET-HOME'
string = 'MY-MISERABLE-JOB'
string = 'The quick brown fox jumps over the lazy dog'

def translate_expression_to_numbers(string):
  result = ''
  for s in string:
    if s in 'ABC':
      result += '2'
    elif s in 'DEF':
      result += '3'
    elif s in 'GHI':
      result += '4'
    elif s in 'JKL':
      result += '5'
    elif s in 'MNO':
      result += '6'
    elif s in 'PQRS':
      result += '7'
    elif s in 'TUV':
      result += '8'
    elif s in 'WXYZ':
      result += '9'
    elif s in '-':
      result += '-'
    elif s in '1':
      result += '1'
    elif s in '0':
      result += '0'
  return result

print(translate_expression_to_numbers(string))