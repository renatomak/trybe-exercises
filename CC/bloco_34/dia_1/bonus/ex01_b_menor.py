list_values = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def seek_lower_value(array):
  return sorted(array)[0]

print(seek_lower_value(list_values))

def seek_lower_value2(array):
  num = array[0]
  for elem in array:
    if (elem < num):
      num = elem
  
  return num

print(seek_lower_value2(list_values))