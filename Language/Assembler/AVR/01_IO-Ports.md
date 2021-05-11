# I/O Ports on AVR

I/O Ports on AVR are Byteoriented and designed with PA, PB, PC, etc. Data direction can be controlled through bits on the mk. 

As output, each pin can be either 0 or 1 (5v). As input, this can be high impedance or via a so-called pull up resistor >>weak 1<<

I/O ports are managed with 3 registers:
* DDRp, Data Direction Register for port p
* PORTp, Port p Data Register
* PINp, Port Input Pins Register

## DDRp

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 
|---|---|---|---|---|---|---|---|---
| Name | DDRp7| DDRp6 | DDRp5 | DDRp4 | DDRp3 | DDRp2 | DDRp1 | DDRp0
| Dir | R/W | R/W  | R/W  | R/W  | R/W  | R/W  | R/W | R/W
| Reset | 0  | 0 | 0 | 0 | 0  | 0 | 0 | 0

DDRpn = 0: Port Pin Pp.n is Input </br>
DDRpn = 1: Port Pin Pp.n is Output

## PORTp
Used to write on the pins

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 
|---|---|---|---|---|---|---|---|---
| Name | PRTp7| PRTp6 | PRTp5 | PRTp4 | PRTp3 | PRTp2 | PRTp1 | PRTp0
| Dir | R/W | R/W  | R/W  | R/W  | R/W  | R/W  | R/W | R/W
| Reset | 0  | 0 | 0 | 0 | 0  | 0 | 0 | 0


| DDRpn | PRTpn | Meaning |
|---|---|---|
| 0 | 0 | Pin is Input, Impedance 
| 0 | 1 | Pin is Input, Resistor 1
| 1 | 0 | Pin is Output with Value 0
| 1 | 1 | Pin is Output with Value 1

## PINp
Used to read the pins

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 
|---|---|---|---|---|---|---|---|---
| Name | PINp7| PINp6 | PINp5 | PINp4 | PINp3 | PINp2 | PINp1 | PINp0
| Dir | R/W | R/W  | R/W  | R/W  | R/W  | R/W  | R/W | R/W
| Reset | x  | x | x | x | x | x | x | x

PINpn = 0 : Low-Level on Input
PINpn = 1 : High-Level on Input