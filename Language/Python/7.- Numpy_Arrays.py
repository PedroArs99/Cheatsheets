import numpy as np  # Modulo para manejar Arrays - install with pip

# CREAR ARRAYS ****************************************************************
np.zeros(4)        # [0, 0, 0, 0]
np.ones(4)
np.arange(4)       # [0, 1, 2, 3] - Same as range ~ arange(2,5,3) ...
np.random.rand(4)  # Generar aleatoriamente

list = [0, 1, 2, 3]
array = np.array(list)

matrix1 = [0, 1, 2, 3]
matrix2 = [4, 5, 6, 7]
matrix2x4 = (matrix1, matrix2)

FullMatrix = np.array(matrix2x4)
FullMatrix.shape  # returns (2,4)
FullMatrix.dtype  # returns integer

np.arange(9).reshape(3, 3)  # Crear Matrices Simple
# *****************************************************************************


# OPERACIONES *****************************************************************
var1 = np.array([0, 1, 2, 3])
var2 = np.array([4, 5, 6, 7])

var1 * 2  # returns [0, 2, 4, 6] - Same for + - / ** // %
np.sqrt(var1)
np.add(var1, var2)

FullMatrixTrasp = FullMatrix.T  # Obtener Traspuesta
# *****************************************************************************

# INDEXACION ******************************************************************
var1[1:3]           # returns[1, 2, 3]
var1[:]             # returns full ARRAY
var1[0]             # returns 0
FullMatrix[0][0]
# *****************************************************************************

# ENTRADA/SALIDA **************************************************************
np.save('nombre', var1)  # Guardar y cargar dentro del modulo
np.load('nombre.npy')

np.savetxt('ruta', var1, delimiter=',')  # Guardar en fichero
np.loadtxt('ruta', delimiter=',')
# *****************************************************************************


# FUNCIONES *******************************************************************
