class TV:
    def __init__(self, tamanho, ligada):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = ligada

    def aumentar_volume(self):
        if 0 >= self.volume <= 99:
            self.volume += 1

    def diminuir_volume(self):
        if 0 >= self.volume <= 99:
            self.volume -= 1

    def modificar_canal(self, canal):
        try:
            self.canal = canal
        except ValueError:
            print('Error: canal invalido')

    def ligar_desligar(self):
        self.ligada = True if self.ligada else False


if __name__ == '__main__':
    tv = TV(50, True)
