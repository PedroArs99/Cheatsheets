import seaborn as sns           # pip install seaborn
import matplotlib as mpl        # pip install matplotlib
import pandas as pd
import numpy as np

# HISTOGRAMAS *****************************************************************
datos = np.random.rand(100)
datos2 = np.random.rand(100)

args_curva = {'color': 'grey', 'label': 'curva'}
args_histo = {'color': 'red', 'label': 'Histograma'}

sns.distplot(datos, kde_kws=args_curva, hist_kws=args_histo)     # Crear Histograma
'''
color='nombre_Color' -> Cambiar color de todo
hist= Boolean        -> Mostrar histograma o solo curva
bins=Numero          -> Numero de barras
kde_kws=Diccionario  -> Argumentos curva
hist_kws=Diccionario -> Argumentos barras
'''
mpl.pyplot.show()

Serie = pd.Series(datos)
sns.distplot(Serie)     # Histograma con una Serie
mpl.pyplot.show()       # Mostrar por pantalla

# *****************************************************************************


# GRAFICOS DE CAJA ************************************************************
sns.boxplot(datos)      # Dibujar graficos de caja
mpl.pyplot.show()

# *****************************************************************************


# REGRESIONES *****************************************************************
dataSet = sns.load_dataset('tips')          # Dataset de pruebas nativo
sns.lmplot('total_bill', 'tip', dataSet)    # Dibujar Regresion
'''
scatter_kws=Diccionario -> config puntos
line_lws=Diccionario    -> config linea
fit_reg=Boolean         -> Mostrar/Ocultar linea
hue=String              -> Poner marca sobre un atributo
markers=Lista[String]   -> caracter para un tipo o para otro

'''
mpl.pyplot.show()

# *****************************************************************************


# MAPAS DE CALOR **************************************************************
dataSet2 = sns.load_dataset('flights')

dataSet2_Matrix = dataSet2.pivot('month', 'year', 'passengers')     # Filas/columnas/Datos
sns.heatmap(dataSet2_Matrix)
'''
annot=Boolean   -> Mostrar Valor del punto
fmt=String      ->Formato para mostrar el valor
center=valor    ->Cambiar gama de colores en funcion de un valor
'''
mpl.pyplot.show()
