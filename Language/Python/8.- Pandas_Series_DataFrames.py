import pandas as pd  # Modulo para Series - pip install pandas
# Series **********************************************************************
serie1 = pd.Series([3, 5, 7])  # Indexa la lista

strings = ["s1", "s2", "s3"]
numbers = [5, 6, 8]

serie2 = pd.Series(numbers, index=strings)  # Indexa numbers usando strings como indices
serie2['s1']                # Para Acceder
serie2[serie2 > 6]          # Para filtrar
serie2.name = 'Serie 2'     # Dar un nombre a la serie
serie2.index.name = 'Nombre de la columna de los indices'

diccionario = serie2.to_dict()      # Convertir a diccionario
serie3 = pd.Series(diccionario)     # Proceso Inverso

numbers2 = [3, 9, 1]
serie4 = pd.Series(numbers2, index=strings)
serie2 * 2                      # Se puede Operar con las series
serieSum = serie2 + serie4 / 2  # Valor medio de una suma de series - ...

serie1.drop(0)                  # Borrar elemento de la serie
serie1.dropna()                 # Borra elementos nulos

serie1.sort_index()             # Ordenar por indices
serie1.sort_values()            # Ordenar por valores
serie1.rank()                   # Indica en que posicion quedaria si ordenasemos por valor

serie1.isnull()                 # Devuelve una serie con true en los elementos nulos

lista_indices_doble = [list('111222'), list('abcabc')]  # Serie indexada en dos niveles
serie5 = pd.Series(range(6), index=lista_indices_doble)
serie5[0]       # Devuelve 3 Valores
serie5[0][0]    # Devuelve 1 valor

dataFrame3 = serie5.unstack()   # Dataframe a partir de serie doble indexada
# *****************************************************************************


# DATAFRAMES ******************************************************************
dataFrame = pd.read_clipboard()         # Crear un dataframe desde el portapapeles

dataFrame.columns                       # Devuelve el nombre de las columnas
dataFrame['Nombre de Columna']          # Devuelve la columna con ese nombre
dataFrame.loc[3]                        # Devuelve la fila n
dataFrame['columna n']                  # Devuelve la columna n
dataFrame[['c1', 'c3']]
dataFrame['columna n']['posicion n']    # Devuelve la tupla[][]
dataFrame.head(5)                       # Muestra las n primeras filas
dataFrame.tail(5)

index = ["s1", "s2", "s3", "s4"]
values = [4, 8, 0, 3]
diccionario = {'Indexes': index, 'Values': values}

dataFrame2 = pd.DataFrame(diccionario)    # Crear Dataframe desde el diccionario

dataFrame.drop(0)                         # Borrar elemento del dataframe
dataFrame.drop('nombre Columna', axis=1)  # Borrar Columna del dataframe

dataFrame[dataFrame['cn'] > 4]            # Filtrar elementos

dataFrame != "algo"                       # devuelve un dataFrame de booleanos

#   Tambien se pueden operar igual que las series

dataFrame.isnull()                        # Igual que series
dataFrame.dropna()
dataFrame.fillna('valor')                 # Rellenar Valores nulos

serie6 = dataFrame.stack()                # Serie a partir de Dataframe
# *****************************************************************************


# ESTADÍSTICAS EN DATAFRAMES **************************************************
dataFrame.sum()         # Suma Por Columnas
dataFrame.sum(axis=1)   # Suma por Filas
dataFrame.min()         # Minimo valor por columna
dataFrame.min(axis=1)
dataFrame.idxmin()      # Devuelve el indice del minimo en la columna
dataFrame.max()

dataFrame.describe()    # Devuelve: Ni,media,desv.tipica,min,cuartiles,max
# *****************************************************************************
