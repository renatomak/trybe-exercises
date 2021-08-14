from exercicio_02 import merge_deck

# Exemplo 1:
# decks = [2, 6, 4, 5]
# decks por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# decks = [1, 4, 4, 7, 6, 6]
# decks por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def test_merge_deck_01():
    array = [2, 6, 4, 5]
    assert merge_deck(array) == [2, 4, 6, 5]


def test_merge_deck_02():
    array = [1, 4, 4, 7, 6, 6]
    assert merge_deck(array) == [1, 7, 4, 6, 4, 6]
