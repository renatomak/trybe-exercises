class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

    def __str__(self) -> str:
        return f'id: {self.id_num} nome: {self.name}'


class HashMap:
    divider = 10

    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        quotient = (id_num // self.divider) * self.divider
        return (id_num % self.divider) + quotient

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


if __name__ == "__main__":
    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id, name in employees:
        employee = Employee(id, name)
        registry.insert(employee)

    registry.update_value(10, 'Renato')

    print(registry.get_value(10))
