# TIPOS DE DATOS **************************************************************
var1 = 0    # type int
var2 = 0.0  # type float
var3 = ""   # type str

type(var1)  # Ver el tipo de variable

int(var2)   # casting
# ...
# *****************************************************************************


# FUNCIONES SOBRE STRINGS *****************************************************
cadena = "abcdefghijk"
cadena2 = "lmnopqrstu"

cadena[0]         # Acceder a elementos
cadena[-1]        # Acceder a posicion empezando por el final
cadena[1:3]       # Acceder a subcadenas
cadena[1:]
cadena + cadena2  # Concatenar cadenas

len(cadena)
cadena.upper()
cadena.lower()
cadena.split(' ')  # Partir en elementos segun separador
# *****************************************************************************


# IMPRIMIR POR PANTALLA *******************************************************
print("Texto: " + cadena)
print("Texto: {}".format(cadena))
var4 = 10 / 3
print("Numero: {r:1.3f}".format(r=var4))
print(f"Texto {cadena}")
# *****************************************************************************


# ENTRADA POR TECLADO *********************************************************
var5 = input("mensajito: ")
var6 = int(input("mensajito: "))  # Para leer un tipo concreto
# *****************************************************************************


# OPERADORES ******************************************************************
var1 + var2
var1 - var2
var1 * var2
var1 / var2
var1 % var2   # Modulo
var1 // var2  # Cociente
var1 ** var2  # Exponentes

var1 += var2
var1 -= var2
var1 *= var2
var1 /= var2
var1 **= var2

var1 == var2
var1 != var2
var1 >= var2
# ...

not var1
var1 and var2
var1 or var2

var1 is var2      # Equals
var1 is not var2  # not Equals

var1 in var2      # Contains
var1 not in var2  # not Contains
# *****************************************************************************


# IF ELIF ELSE ****************************************************************
if (1 > 0) and (not (0 < 1)):
    print()
elif (3 != 4) or (var1 == var2):
    print()
else:
    print()
# *****************************************************************************


# BUCLES **********************************************************************

for i in []:  # Poner cosas en la lista
    break

for j in range(10):  # de 0 a 10
    break

for k in range(3, 5, 2):  # [3,5) k+=2
    continue


while(var1):
    break
# *****************************************************************************


# FUNCIONES *******************************************************************


def nombreFuncion(arg1, arg2):
    print("body")


# *****************************************************************************


# FUNCIONES LAMBDA ************************************************************
# Funcion sin nombre almacenada en una Variable
''' var7 = lambda arg1, arg2: arg1 ** arg2 '''

# print(var7(2, 3))
# *****************************************************************************


# EXCEPCIONES *****************************************************************
try:
    var8 = 3
except ZeroDivisionError:
    print("error tipo 1")
else:
    print("Lo que hacer si no salta el error")
finally:
    print("Do Something")
# *****************************************************************************
