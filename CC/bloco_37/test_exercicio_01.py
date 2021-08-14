from exercicio_01 import max_stable_server_time


def test_return_3():
    array = [0, 1, 1, 1, 0, 0, 1, 1]
    assert max_stable_server_time(array) is 3


def test_return_4():
    array = [1, 1, 1, 1, 0, 0, 1, 1]
    assert max_stable_server_time(array) is 4


def test_no_instabilities():
    array = [1, 1, 1, 1, 1, 1, 1, 1]
    assert max_stable_server_time(array) is len(array)


def test_always_unstable():
    array = [0, 0, 0, 0, 0, 0, 0, 0]
    assert max_stable_server_time(array) is 0


def test_entry_empty():
    array = []
    assert max_stable_server_time(array) is 0
