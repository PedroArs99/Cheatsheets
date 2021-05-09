import tkinter  # Modulo de UI

''' API PARA COMPONENTES
    http://effbot.org/tkinterbook/

    TODOS LOS COMPONENTES TIENEN METODO CONFIG
'''


# ELEMENTO RAIZ - FRAME *******************************************************
root = tkinter.Tk()
root.title("TITULO DEL MARCO")
# *****************************************************************************


# COMPOMENTE FRAME - CONTENEDOR ***********************************************
frame = tkinter.Frame(root)
frame.config(bg="red", width=400, height=400)
frame.pack()
# *****************************************************************************


# COMPONENTES *****************************************************************
labelText = "ETIQUETA"
label = tkinter.Label(root, text=labelText)
label.pack()

textField = tkinter.Entry(root)
textField.pack()
textField.get()  # Recoger Valor

multiLineTextField = tkinter.Text(root)
multiLineTextField.pack()


def accion():
    label.config(fg="red", text="BUTTON PRESSED")


button = tkinter.Button(root, text="Boton", command=accion)
button.pack()

''' (...) '''

# *****************************************************************************

# EJECUTAR ********************************************************************
root.mainloop()  # frame.show()
