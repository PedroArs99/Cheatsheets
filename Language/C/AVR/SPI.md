# Serial Peripheral Interface (SPI)

* SPI is a simple synchronous transmission protocol
* The data is exchanged serially by means of one shift register each in the transmitter and receiver.
* The *master* generates a cycle and starts the transmission, while the *slave* accepts it.
* *Enable* signal allows adressing of more than one slave. In this context 4 signals are needed:
    * MOSI: Master Out - Slave In
    * MISO: Master In - Slave out
    * SCK: Serial clock
    * SE: Serial Enable

## SPI Register
SPDR (SPI Data register) is a 8 bit data register, which content will be sended after write access. After transfer it contains the received byte.

| bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name | SPIE | SPE | DORD | MSTR | CPOL | CPHA | SPRI1 | SPR0 |
| Dir | R/W | R/W | R/W | R/W | R/W | R/W | R/W | R/W |
| Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* SPIE: SPI0 Interrupt Enable
* SPE: SPI0 Enable
* DORD: Data0 Order (0: MSB first, 1: LSB first)
* MSTR: Master/Slave0 Select (0: Slave, 1: Master)
* CPOL: Clock Polarity (clock level when SPI idle)
* CPHA: Clock Phase (Takt-Flanke increasing/decreasing)
* SPR[1:0]: SPI Clock Rate Select

| bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name | SPIF | WCOL | - | - | - | - | - | - | SPI2X |
| Dir | R/W | R/W | R/W | R/W | R/W | R/W | R/W | R/W |
| Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* SPIF: SPI Interrupt Flag, 1 when Transfer is complete (Reset writing a 1)
* WCOL: Write Coliision Flag, 1 when SPDR is written while transmitting
* SPI2X: Double SPI Speed bit (1: SPI cycle is doubled)

| SPI2X | SPR[1] | SPR[0] | Description |
| --- | --- | --- | --- |
| 0 | 0 | 0 | f_osc/4 |
| 0 | 0 | 1 | f_osc/16 |
| 0 | 1 | 0 | f_osc/64 |
| 0 | 1 | 1 | f_osc/128 |
| 1 | 0 | 0 | f_osc/2 |
| 1 | 0 | 1 | f_osc/8 |
| 1 | 1 | 0 | f_osc/32 |
| 1 | 1 | 1 | f_osc/64 |

## SPI Use
1. Set SPI Signal data direction in DDRR register
2. Configure SPI (Enable, Master/Slave, Clock Rate, Clock edges)
3. Remove SPIF flag
    * Master Mode: Transmit by writing in SPDR. Wait for SPIF Flag before transmit new Data.
    * Slave Mode: Wait for SPIF in SPSR Register, read SPDR. Alternative: Interrupts.

## SPI on Master mode
```C
void SPI_MasterInit(void){
    // Set MOSI and SCK output
    DDRB = (1<<PB3) | (1<<PB5);
    // Enable SPI, Masterm set clock rate fck/16
    SPCR = (1<<SPE) | (1<<MSTR) | (1<<SPR0);
}

void SPI_MasterTransmit(uint8_t data){
    // Wait until last transmission complete
    // (if any)
    while(!(SPSR & (1<<SPIF)));

    // Start new transmission:
    SPDR = data;
}
```