from typing import Counter


class Estatistica():
    @classmethod
    def media(cls, list_numbers):
        media = 0
        for item in list_numbers:
            media += item

        media = media/len(list_numbers)

        return media

    @classmethod
    def mediana(cls, list_numbers):
        list_numbers.sort()
        index = len(list_numbers) // 2
        if len(list_numbers) % 2 == 0:
            return (list_numbers[index - 1] + list_numbers[index]) / 2
        else:
            return list_numbers[index]

    @classmethod
    def moda(cls, list_numbers):
        list_numbers.sort()
        number, value = Counter(list_numbers).most_common()[0]
        return number


if __name__ == '__main__':
    notas = [6, 7, 8, 9, 6]
    print(Estatistica.media(notas))
    print(Estatistica.mediana(notas))
    print(Estatistica.moda(notas))
