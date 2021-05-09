import sqlite3 as sql  # Modulo para gestionar BD

# CREAR/CONECTAR BD ***********************************************************
''' Se conecta a una BD existente o la crea
    Devuelve la BD en una vble '''
dataBase = sql.connect("/Users/pedroArenas/Desktop/dataBase.db")
# *****************************************************************************


# CREAR TABLAS ****************************************************************
''' Metodo para poder ejecutar sentencias dentro de la BD '''
cursor = dataBase.cursor()

''' Ejecutar sentencias sql dentro de la BD '''
cursor.execute("CREATE TABLE NOMBRE(campo1 TEXT,campo2 INTEGER)")
# *****************************************************************************


# TRATAMIENTO DE  FILAS *******************************************************
''' Insertar una fila '''
cursor.execute("INSERT INTO NOMBRE VALUES('valor campo', 0)")

''' Insertar varias filas '''
values = [('valor 0', 0), ('valor 1', 1), ('valor n', 2)]

# Ejecutar una sentencia tantas veces como valores haya en la lista
cursor.executemany("INSERT INTO NOMBRE VALUES(?,?)", values)
# *****************************************************************************


# CONSULTAR DATOS *************************************************************
cursor.execute("SELECT * FROM NOMBRE")
resultados = cursor.fetchall()  # Recoger Resultados
# *****************************************************************************


# ANTES DE SALIR **************************************************************
''' Guardar Cambios en la BD de forma permanente '''
dataBase.commit()

''' Cerrar la bd al salir '''
dataBase.close()
# *****************************************************************************
