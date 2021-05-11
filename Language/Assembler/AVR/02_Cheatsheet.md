# AVR Assembler
* `.asm` file extension
* More than 100 instructions divided on:
    * Arithmetic and logic
    * Jumps and branching
    * Transfer memory
    * Control instructions

## Nomenclature
* Rd: Source(Destination) and goal register
* Rr: 2nd Rd
* s: a bit in status register (I,T,H,S,V,N,Z,C)
* b: bit in register file
* K: Constant data
* k: Constant address
* X,Y,Z: Indirect register adress
* A: I/O address

Note: Only registers from R16 to R31 can be addressed

## Operands and Expressions
* By default all numbers are interpreted as decimal
* Hexadecimals have to be preceded by `$` or `0x` 
* Binaries have to be preceded by `0b`

## Directives

| Directive | Function | Example |
|---|---|---|
| .INCLUDE | Add external srcs | .INCLUDE "m8.inc"|
| .MACRO | Macro begin | .MACRO addi|
| .ENDM | Macro end | .ENDM|
| .DEF | Define symbol | .DEF battery = r16|
| .EQU | Constant | .EQU freq=100 |
| .SET | Variable | .SET value=123|
| .CSEG | Save space for program | .CSEG ; Flash
| .DSEG | Save space for RAM | .DSEG ; SRAM|

## Status Register (SREG)
| Register | Bit | Meaning |
| --- | --- | --- |
| I | 7 | Global interrupt enabled (0: blocked, 1: Freed) |
| T | 6 | Transfer (To read/write single bits on registers)|
| H | 5 | Halfcarry|
| S | 4 | Sign (N xor V)|
| V | 3 | Complement Overflow |
| N | 2 | Negative | 
| Z | 1 | Zero |
| C | 0 | Carry | 

## Adress start for arithmetic instructions
* All registers from (R0 to R31 are available)
 
```assembly
inc r0 ; r0 <- r0 + 1
add r0, r1 ; r0 <- r0 + r1
```

## 16-Bit arithmetic
```assembly
adiw r15,42 ; adds K=42 to registers [r16:r15]
```

## Data transfer instructions
* Used to transfer data from a memory area to another
* Source and Destination can be register, rata or program memory
* Data memory will be differentiated between I/O and general data registers
* Access has to be done direct or indirect through X,Y,Z registers

## Addressing for data transfer instructions
* I/O registers are in range 0x0020 - 0x005F
* 0x0020 offset is automatically added

```assembly
in r20, PIND ; Read PIND register and dump into r20
```

* To address data from memory two instructions and two cycles are needed
```assembly
lds r1, 0xff00 ; read r1 from address 0xff00
add r1,r2 ; add r2 to r1
sts 0xff01, r1 ; write result to 0xff01
```

* Indirect adressing is done through X,Y,Z registers. Two cycles are needed, only one on modern AVR microprocessors.

```assembly
ldi XH,0xff ; set X high byte (r27) to 0xff
ldi XL,0x00 ; set X low byte (r26) to 0x00
ld r1, X+ ; load r1 with data space located at 0xff00 X(post incr)
add r1,r2 ; add r1 to r2
st X,r1 ; store r1 to 0xff01
```

```assembly
ldi ZH, high(Table_1<<1) ; init Z pointer to table_1 address
ldi ZL, low(Table_1<<1)
lpm r16,Z ; load constant

Table_1:
.dw 0x5876
```

## Stack
Addressing is done thorugh registers SPL and SPH.
* `PUSH Rr` writes Rr to the stack and moves the pointer
* `POP Rr` writes Rr with the top of the stack and moves the pointer

## Jumps and Branching
* In a linear program each cycle increment PC on 1
* On absolute jumps `jmp` PC is populated with k address
* On relative jumps `rjmp` Pc is populated with PC + k + 1
* On calling a program with `call`, current state is saved on the stack to assure the returning with `ret`
* Used Relative jumps if possible (They take only one cycle)
* On case the relativ jump is not possible (Jump is too large), use an absolute jump

## Control flow
```c++
if(a != b){
    i++;
}
```

```assembly
.def a r0
.def b r1
.def i r2

cpse a,b ; Compare and skip when equal
inc i
```


```c++
if(a == b){

}else{

}
```

```assembly
.def a r0
.def b r1

cp a,b ; Z flag is set when a-b is 0
brne notEqual ; branch when Z = 0
rjmp equal 

notEqual:
    ; Something
equal:
    ; something
```

```c++
if(a >= b){

}else{

}
```

```assembly
.def a r0
.def b r1

cp a,b ; C flag is set when a<b
brlo smaller ; branch when C = 1
rjmp biggerOrEqual 

smaller:
    ; Something
biggerOrEqual:
    ; something
```

```c++
for (i = 0; i< 10; i++){

}
```

```assembly
clr i ; i = 0

loop:
; loop body
inc i ; increment i
cpi i,10 ; compare i with 10
brlt loop; branch if less than
```

# Subprograms
```assembly
rcall funktion


funktion:
ret
```

* Arguments can be given using registers, the stacks or RAM
* Registers inside the local functions are global
* Good practice: On a function call always store the registers on the stack and pop before returning
