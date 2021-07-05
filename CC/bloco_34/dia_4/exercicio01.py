#n = int(input())

def list_of_numbers(number):
  result = []
  for n in range(number):
    num = n+1
    is_divisible_by_three = num % 3 == 0
    is_divisible_by_five = num % 5 == 0

    if (is_divisible_by_three and is_divisible_by_five):
      result.append('FizzBuzz')
    else:
      if is_divisible_by_three:
        result.append('Fizz')
      elif is_divisible_by_five:
        result.append('Buzz')
      else:
        result.append(num)
  return result


#print(list_of_numbers(n))