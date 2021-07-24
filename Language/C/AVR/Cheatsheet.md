# C for AVR Microcontroller

## Hello World on AVR

```C
# include < avr / io .h > // definition of registers
# define OUTPUT_BIT 2 // definition of output
# define INPUT_BIT 3 // definition of input
void main ( void ) {
    DDRD |= (1 < < OUTPUT_BIT ) ; // direction output
    while (1) {
        if( PIND & (1 < < INPUT_BIT ) ) { // check input
            PORTD |= 1 < < OUTPUT_BIT ; // set output
        } else {
            PORTD &= ˜(1 < < OUTPUT_BIT ) ; // clr output
        }
    }
}
```

## Data types

| Type | Size |
|---|---|
| uint8_t | 8 |
| int8_t | 8 |
| uint16_t | 16 |
| int16_t | 16 |
| uint32_t | 32 |
| int32_t | 32 |

* When possible, always use the smaller one
* Avoid `int` & `bool`. Avoid also ``char`` except for characters

## AVR-libc
`AVR-libc` implements a subset of C libraries for AVR microcontroller. [Documentation](https://nongnu.org/avr-libc/user-manual/)

## AVR Header files
* avr/io.h: Definition of I/O registers, (microcontroller specific)
* avr/interrupt.h: Macros for interruptions
* stdlib.h: General functions and methods (i.e. abs(), atoi(),malloc())
* math.h: Maths (i.e. sin(), sqrt(), M PI)
* stdio.h: Standard IO (i.e. printf(), stdout)
* [Full list](http://nongnu.org/avr-libc/user-manual/modules.html)

## Standard I/O
Lack of OS or FS limits the I/O. Device for `stdio` has to be defined by the user. `stdio.h` defines only macros. If possible use `atoi()` instead of `printf()`.

```C
# include < stdio .h >
static FILE mystdout = FDEV_SETUP_STREAM (
uart_putchar , NULL , _FDEV_SETUP_WRITE 
);

static int uart_putchar ( char c , FILE * stream ) {
// write out character to serial , display , etc .
    return 0;
}

void main ( void ) {
    stdout = & mystdout;
    printf ( " Hello , world !\ n " ) ;
}
```

## Mix C and Assembler
.s assembler files can be added to a C project. They'll be given to the compiler through the preprocessor.

To acces assembler items they have to be defined with `.global` and accessed in C with `extern`.

To define C items on assembler they have to be named with `.extern` directive.

```C
unsigned char my_value
```

equals to

```assembler
.extern my_value

lds r16, my_value ; content on the variable has to be saved on SRAM
```

``` assembler
.global myAssemblerFunction

myAssemblerFunction:
    ; ...

ret
```

can be used on C with
```C
extern uint8_t

myAssemblerFunction(uint8_t x);
```

Arguments are given using `R25` to `R8` from higher to lower. If the argument has more than 1 byte it will be given using 2 registers. Return works the same way

## C vs Assembler
* `#define` instead of `.equ` or `.def`
* `#include` instead of `.inc`

## Conventions
* `R0` is free to use without security
* `R1` is zero value. If used has to be reseted
* `R2` to `R17`, `R28,29` are call-save and have to be saved and restore before and after use.
* `R18` to `R27`, `R30,31` are call-used and provide any security.







