# MODULOS *********************************************************************
# Ficheros .py con funciones

import os  # Funciones del SO
import pickle  # Manejar Ficheros Binarios
from PythonBasics import nombreFuncion as f

f("", "")

# *****************************************************************************

# FICHEROS ********************************************************************
file = open("ruta", "modo")
var1 = file.read()                      # Leer fichero completo

file2 = open("Nueva Ruta", "modo")
file2.write("")                         # Escribir fichero completo

'''
Modos de FICHEROS
r_  : Lectura
w_  : Escritura
a_  : Append
x_  : Crear el Fichero
_t  : Texto Plano
_b  : Binario
__+ : Abrir en Lectura/Escritura
'''
os.remove("Ruta")                       # Borrar Fichero

pickle.dump("Variable", file)           # Escribir en un fichero binario
var2 = pickle.load(file)                # Lectura de un fichero binario

file.close()                            # Cerrar Ficheros
file2.close()
# *****************************************************************************
