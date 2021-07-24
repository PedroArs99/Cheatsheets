# Inter Integrated Circuit (I2C) Bus

The inter integrated circuit bus is a serial bus for On-Board comunication.

## Functionality
* A single data line (SDA) sends and receive data (Bidirectional Bus)
* No Enable-Signal, Adress over data is used instead
* One takt line (SCL)
* Only Two lines, independent from the nunber of participants
* Master/Slave Principle
* Due to complexity of the protocol only a few of data transfer speeds are available:
    * Standard mode: 100kBits/s
    * Fast mode: 400kBits/s
    * Fast mode plus: 1Mbit/s
    * Ultra High speed mode: 3,4 MBit/s
    * Ultra fast mode (Only unidirectional): 5,0 MBit/s

## Transmission
* START: As soon as SDA is low while SCL is high
* Then follows a 7 Bit address together with a R/W flag with each rising edge of SCL
* Finally follows 8 Data bit that comes from the sender (R/W = 0) or the receiver (R/W = 1).
* When corresponding follow more Data bytes
* Each byte is confirmed from the slave with ACK = 0
* STOP: As soon as SDA is high while SCL is high

## IIC Register
### TWI Data Register TWD
* 8 Bit Data register
* Transmit mode: Byte to be send next
* Receive mode: Last received byte

### TWI Status Register TWSR
| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name | TWS7 | TWS6 | TWS5 | TWS4 | TWS3 | TWS2 | TWS1 | TWS0 |
|Dir | R | R | R | R | R | R | R/W | R/W |
|Reset | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |

* TWS[7:3]: TWI Status Bit
* TWS[1:0]: TWI Bit Rate Prescaler

| TWSR | Description | Success/Error |
| --- | --- | --- |
| 0x08 | START sended | Succes | 
| 0x10 | Repeated start sended | Error |
| 0x18 | ACK Received while SLA + W | Success |
| 0x20 | No ACK Receive while SLA + W | Error |
| 0x28 | Data sended, ACK Returned | Success |
| 0x30 | Data sended, NACK Returned | Error |
| 0x38 | Arbitration lost while SLA + R/W | Error |
| 0x40 | ACK Received while SLA + R | Success |
| 0x48 | No ACK Received while SLA + R | Error |
| 0x50 | Data sended, ACK Returned | Success |

### TWI (Slave) Address Register TWAR
| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name | TWA6 | TWA5 | TWA4 | TWA3 | TWA2 | TWA1 | TWA0 | TWGCE |
|Dir | R/W | R/W | R/W | R/W | R/W | R/W | R/W | R/W |
|Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* TWA[6:0]: Slave Address (While not in master mode)
* TWGCE: General Call Recognition Enable bit. While 1, will react to Address 0 calls

### TWI Control Register TWCR
| Bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Name | TWINT | TWEA | TWSTA | TWSTO | TWWC | TWEN | - | TWIE |
|Dir | R/W | R/W | R/W | R/W | R/W | R/W | R/W | R/W |
|Reset | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

* TWINT: TWI Interrupt Flag, 1: TWI Ready
* TWEA: TWI Enable Acknowledge, 1: Generate Acknowledge
* TWSTA: TWI Start Condition, 1: Resolve Start
* TWSTO: TWI Stop Condition, 1: Resolve Stop
* TWWC: TWI Write Collision Flag
* TWEN: TWI Enable, 1: TWI enabled
* TWIE: TWI Interrupt Enable, 1: Enable Interrupt

## Prescaler
* Results from TWPS[1:0]

| TWPS1 | TWPS0 | Prescaler |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 4 |
| 1 | 0 | 16 |
| 1 | 1 | 64 |

## IIC Use
1. Trigger START: TWINT = 1, TWSTA = 1, TWEN = 1
2. Wait until TWINT = 1 in TWCR
3. Prove successful start on TWSR = 0x08
4. Load address in R/W in TWDR, TWINT = 1, TWSTA = 0
5. Wait until TWINT = 1 in TWCR
6. Prove SLA + R/W on TWSR = 0x18 (W) or TWSR=0x40 (R)
7. Load Data in TWDR, TWINT = 1
8. Wait until TWINT = 1 in TWCR
9. Prove data successful received/read on TWSR = 0x28 (W) or 0x50 (R).
    * Repeat 7 when needed
10. Trigger STOP: TWINT = 1, TWSTO = 1

### Send data in Master mode: Start and addressing

```C
int8_t I2CStartTransmission(uint8_t address, bool rnw){
    // Send start
    TWCR = (1<<TWINT)|(1<<TWSTA)|(1<<TWEN);
    
    // Wait for TWINT
    while(!(TWCR & (1<<TWINT)));

    // Check TWI Status Register
    if((TWSR & 0xF8) != 0x08) return -1;

    TWDR = (address<<1)|(rnw); // Address and R/W flag
    TWCR = (1<<TWINT)|(1<<TWEN); // Clear TWINT

    // Wait for TWINT
    while(!(TWCR & (1<<TWINT)));

    // Check TWI Status Register
    if ((TWSR & 0xF8) != 0x18) return -1; 

    return 0;
}

int8_t I2CSendData(uint8_t data){
    // load data in TWDR reg. and clear TWINT
    TWDR = data;
    TWCR = (1<<TWINT)|(1<<TWEN);

    while(!(TWCR & (1<<TWINT))); // Wait for TWINT

    // check TWI Status Register
    if ((TWSR & 0xF8) != 0x28) return -1;
    return 0;
}

int8_t I2CStopTransmission(){
    // Send stop
    TWCR = (1<<TWINT)|(1<<TWSTO)|(1<<TWEN);
    while(!(TWCR & (1<<TWSTO))); // Wait for TWSTO
}
```
