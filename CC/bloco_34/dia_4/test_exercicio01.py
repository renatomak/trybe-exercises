from exercicio01 import list_of_numbers

def test_list_of_numbers_3():
  assert list_of_numbers(3) == [1, 2, 'Fizz']

def test_list_of_numbers_5():
  assert list_of_numbers(5) == [1, 2, 'Fizz', 4, 'Buzz']

def test_list_of_numbers_15():
  assert list_of_numbers(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
