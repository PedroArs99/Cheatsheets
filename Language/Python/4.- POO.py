# CLASES **********************************************************************
class clase:

    def __init__(self, var1, var2):  # Constructor
        self.v1 = var1               # Variables definidas dentro
        self.v2 = var2
        self.__v3 = 0          # Variable Privada - Acceder con getter y setter

    @property                        # Indicador de Getter
    def v3(self):
        return self.v1

    @v3.setter                       # Indicador de Setter
    def v3(self, valor):
        self.__v3 = valor


varClase = clase("", 0)              # Declarar instancias

varClase.getV1()                     # Llamar métodos
# *****************************************************************************

# HERENCIA ********************************************************************


class clase2(clase):                 # Indicar clase padre
    def __init__(self, algo):
        super().__init__()           # LLamada al constructor del padre
        self.var = algo


# *****************************************************************************
