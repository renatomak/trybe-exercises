def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# meu_array = list(range(1000))
# 1000000 iterações!
# python3 ex_fixacao02.py  1,19s user 1,24s system 27% cpu 8,898 total
meu_array = list(range(2000))
# 4000000 iterações!
# python3 ex_fixacao02.py  4,77s user 4,75s system 28% cpu 32,958 total

multiply_arrays(meu_array, meu_array)
