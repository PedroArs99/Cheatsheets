# LISTAS **********************************************************************
var1 = [1, 2, 3, 4, 5]

var1[0] = ""
var1.append(6)
var1.remove(4)  # Borra el elemento entre parentesis
var1.clear()    # Vaciar lista

lista_caracteres = list('asdfghjklñ')

len(var1)
# *****************************************************************************


# TUPLAS **********************************************************************
var2 = (1, 2, 3, 4, 5)

var2[0]  # Solo para consulta

len(var2)
# *****************************************************************************


# CONJUNTOS *******************************************************************
var3 = {1, 2, 3, 4, 5}

var3.add(6)
var3.remove(4)  # Borra el elemento entre parentesis

len(var3)
# *****************************************************************************


# DICCIONARIOS ****************************************************************
var4 = {1: "a", 2: "b", 3: "c"}

var4[1]        # Devuelve el valor para esa clave
var4[4] = "d"  # Añadir Clave - Valor
var4.pop(1)    # Borrar Clave - valor
del(var4[2])   # Borrar Clave - Valor
# ****************************************************************************
