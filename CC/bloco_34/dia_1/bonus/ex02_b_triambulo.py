n = int(input())

def create_asterisk_triangle(num):
  triangle = ''
  for elem in range(1, num+1):
    i = 0
    while(i < elem):
      triangle += '*'
      i+=1
    triangle += '\n'
  return triangle

print(create_asterisk_triangle(n))