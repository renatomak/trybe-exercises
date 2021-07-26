def Fibonacci(n):
    fibo = [0, 1]
    index = 1
    while fibo[-1] < n:
        fibo_inline = fibo[index-1] + fibo[index]
        fibo.append(fibo_inline)
        index += 1
    return fibo


print(Fibonacci(6))
