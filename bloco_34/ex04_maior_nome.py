list_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def bigger_name(names):
    bigger = names[0]
    for name in names:
        if len(name) > len(bigger):
            bigger = name
    
    return bigger

print('O maior nome é ', bigger_name(list_names))