# Timer

* Timer/Counter are versatile hardware elements to control or measure time.

* In the AVR exists a core which can be configured in directions:
    * Up / Down
    * Upper limit (TOP)
    * Under limit (BOTTOM)
    * Counter frecuency

* Counter runs parallel to the CPU and is independent from program execution

* Features offered are:
    * Time measure
    * Scheduling
    * Frecuency generator
    * Pulse width modulation (PWM)

## Timer on ATmega328P
The ATmega328P has 3 counters:
* 8 bit Timer/Counter0 with PWM
* 16 bit Timer/Counter1 with PWM
* 8 bit Timer/Counter2 with PWM and asynchronous operation

Timers can control the `Output Compare Pins (OCnA/B)` to generate PWM signals without affecting the CPU.

## Timer functionality
* `TCNTn` contains the actual counter status
* Independent from the operation mode, the counter will increase, decrease or reset `clkTn`.
* A Timer update from the CPU has always priority
* 16 bit timer has 2 accesses:
    * 1. High Byte, 2. Low Byte to write
    * 1. Low Byte, 2. High Byte to read
* `clkTn` can be generated internally oder externally.
* `OCRnA & OCRnB` can be used to define time tresholds.
* When `TCNTn` match with `OCRnA` or `OCRnB`, flags `OCFnA/B` will be set. Interruptions can be eventually handle to manipulate the pins.
* When the timers overlap, `TOVn and TIFRn` will be setted.
* `TIFRn` is resseted by writing a logical 1
* Timer configurations take place using the registers `TCCRnA` and `TCCRnB`.

## Timer Control Register A (TCCRnA)

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name |  COMnA1 | COMnA0| COMnB1 | COMnB0 | - | - | WGMn1 | WGMn0 |
| Dir | R/W | R/W | R/W | R/W | R | R | R/W | R/W | 
| Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* COMnA/B[1:0] Compare Match Output Mode A/B:   
    * Active/Controls the behaviour of Output Compare Pins
* WGMn[1:0] Waveform generation mode:
    * Sets the counter mode

## Timer Control Register B (TCCRnB)

| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name |  FOCnA | FOCnB| - | - | WGMn2 | CSn2 | CSn1 | CSn0 |
| Dir | W | W | R | R | R | R | R/W | R/W | 
| Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* FOCnA/B Force Output Compare A/B:
    * Enforces a match and update the `OCnA/B` Pins
* WGMn2 Waveform generation mode:
    * Sets the counter mode
* CSn[2:0] Clock select
    * Sets the timer clock frecuency `clkTn`

## Timer Modes

| Mode | WGMn2 | WGMn1 | WGMn0 | TOP | Description |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0xFF | Normal|
| 1 | 0 | 0 | 1 | 0xFF | PWM, phase correct|
| 2 | 0 | 1 | 0 | OCRA/B | Clear Timer on Compare Match |
| 3 | 0 | 1 | 1 | 0xFF | Fast PWM |
| 4 | 1 | 0 | 0 | - | Reserved |
| 5 | 1 | 0 | 1 | OCRA/B | PWM, phase correct |
| 6 | 1 | 1 | 0 | - | Reserved |
| 7 | 1 | 1 | 1 | OCRA/B | Fast PWM |

* Normal mode:
    * Count until 0xFF and then overflows to 0x00
* Clear Time on Compare Match (CTC):
    * Counts until `OCRnA` and resets to 0x00
* Fast PWM:
    * Counts until 0xFF (Mode 3) or `OCRnA` (Mode 7) and resets to 0x00. Deletes/sets `OCnA/B` when reaching `OCRnA` and sets/deletes `OCnA/B`  to 0x00 on each (COMnA/B)

* Phase Correct PWM mode:
    * COunts until 0xFF (Mode 1) or `OCRnA` (Mode 5) and then until 0x00. Delete/sets OCnA/B when counting up and reaching OCRnA and sets/deletes OCnA/B when counting down and reaching OCRnA.

## Uses of each mode
* Normal mode: Time measure (Maximum range)
* CTC mode: Creating desired time delays
* Fast PWM Mode: Creating PWM-Signals with low phase resolution
* Phase Correct PWM mode: Creating slow PWM signals with high phase resolution

## Compare Output Mode, no-PWM Modes

| COMnA/B1 | COMnA/B0 | Description |
| --- | --- | --- |
| 0 | 0 | Normal port operation, OCnA/B not used
| 0 | 1 | Toggle OCnA on match
| 1 | 0 | Clear OCnA/B on match
| 1 | 1 | Set OCnA/B on match

## Compare Output Mode, PWM Modes
| COMnA/B1 | COMnA/B0 | Description |
| --- | --- | --- |
| 0 | 0 | Normal port operation, OCnA/B not used
| 0 | 1 | Toggle OCnA on match
| 1 | 0 | Clear OCnA/B on match (Or count up), set OCnA/B on 0 or count down
| 1 | 1 | Set OCnA/B on match (Or count up), set OCnA/B on 0 or count down

## Interrupt flag register
| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name |  - | - | - | - | - | OCFnB | OCFnA | TOVn |
| Dir | W | W | R | R | R | R | R/W | R/W | 
| Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* OCFnA/B: Output compare timer n A/B match flag
* TOVn: Overflow flag timer n
* Flags marks exceed limits or overflow in OCRnA/B
* Interrupts can be handled, if defined in TIMSKn register
* Reset the flags by writing a logical 1

## Example
```C
// init
TCCR0A  = 0x00; //normal mode
TCCR0B |= 1<<CS00; // Timer clock is
TCCR0B |= 1<<CS01; // 16E6/64=1/4 microsecond
TCNT0 = 0; // reset timer register

// Something you want to measure

TCCR0B = 0x00; // Stop timer

if((TIFR0) && (1<<TOV0)) {
    // Timeout
}else{
    uint8_t ticks = TCNT0; //time = ticks*4microsends
}

```