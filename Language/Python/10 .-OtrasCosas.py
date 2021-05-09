import re    # Modulo para manejar Expresiones Regulares
import json  # Modulo para serializar datos a json
from datetime import datetime as dt  # Modulo para recoger fecha y hora
import doctest  # Modulo para pruebas automaticas
import unittest  # Modulo para pruebas unitarias

# EXPRESIONES REGULARES *******************************************************
''' Busqueda de patrones en una cadena de texto '''

var1 = "Texto"

re.search("Patron a Buscar", var1)   # Devuelve un Objeto tipo Match
re.findall("Patron a buscar", var1)  # Devuelve una lista con todas las ocurrencias
re.split("\s", var1)
re.sub("p1", "p2", var1)  # Sustituye las ocurrencias de p1 por p2

''' Caracteres en patrones
texto$ : Cadenas que acaben en texto
^texto : Cadenas que empiecen por texto
tex.*to : pueden aparecer caracteres entre tex y todo
'''

''' Secuencias de escape
\s : Espacio
\n : Salto de linea
\t : Tabulador
'''
# *****************************************************************************


# JSON ************************************************************************
var2 = {"key1": "value1", "key2": "value2"}

EstructuraJSON = json.dumps(var2)

# json.load(EstructuraJSON)
# *****************************************************************************


# FECHA Y HORA ****************************************************************
datetime = dt.now()

(day, month, year) = (datetime.day, datetime.month, datetime.year)
(hour, minute, second) = (datetime.hour, datetime.minute, datetime.second)
# *****************************************************************************


# GENERAR DOCUMENTACION *******************************************************
# DocStrings
def nombreFuncion(arg):
    """
        insertar comentarios de API
    """
    print("Something")


class nombreClase:
    """
        Comentarios de API tmb para clases
    """


# Pydoc
''' En terminal Escribir pydoc -w "Ruta Completa" para generar un fichero .html
    Con la api escrita en los DocStrings

    pydoc -w "NombreFuncion" para generar api de built-in
'''
# *****************************************************************************


# TESTS ***********************************************************************
# doctest
def sumar(arg1, arg2):
    """
        Dentro de los comentarios de api se pone la anotacion de TESTS

        >>>sumar(1,1)
        2
    """
    return arg1 + arg2


doctest.testmod()

''' Para ejecutar:
    En consola python "Ruta" -v
'''

# UnitTest


class pruebas(unittest.TestCase):
    def test(self):
        self.assertEqual(sumar(1, 1), 2)


''' Ejecutar '''
if __name__ == '__main__':
    unittest.main()
# *****************************************************************************

# FUNCIONES COMPLEJAS *********************************************************
''' Funciones Generadoras - Lista Por Comprensión'''


def generadorPares():
    cont = 1
    yield 2 * cont
    cont += 1


generador1 = generadorPares()
var3 = next(generador1)
for i in generadorPares():
    print(i)

''' Filter - Filtrar Resultados de una lista segun Condicion'''


def funcionCondicional(arg):
    if(arg % 2 == 0):
        return True
    else:
        return False


Resultados = filter(funcionCondicional, range(11))
list_resultados = list(Resultados)

''' Map - Aplicar una funcion a todos los elementos de una lista '''


def funcionAplicar(arg):
    return arg * 2


ResultadosMap = map(funcionAplicar, range(5))
ResultadosMap2 = map(lambda num: num * 2, range(5))
list_resultadosMap = list(ResultadosMap)
