# Python

## Data Types
Dinamically assigned by the compiler

```python
# check datatype
type(var)
```

```python	
# Explicit casting
int(var)
```

### Operators
* Arithmetic
    - `+ - * / %`
    - Floor division: `//` 
    - Exponents `**`
* Comparison
    - `== != < > <= >=`
* Logical
    - `and or not`
    - Equals in Java: `is` or `is not`
    - Contains: `in` or `not in`
* Assignation
    - `= += -= *= /= **=`

## String Utils
```python
str = 'foo'
```
```python
# Access chars
str[0]
```

```python
# Access chars starting at the end
str[-1]
```

```python
# Substrings
str[0:2]
str[1:]
```
```python
# Length
len(str)
```

```python
# Case
str.upper()
str.lower()
```

```python
# Split
str.split('_')
```
## I/O
```python
print('Hello World')
print("{r:1.3f}".format(r=var))
print(f"{var}")
```

```python
var = input('Enter: ')
```

## Control Flow
```python
if var == 0:
    # Do Something
elif var == 1:
    # Do Something
else:
    # Do Something
```

```python
for i in range(10):
    # Do Something

for i in range(5,10):
    # Do Something

for i in range(5,10,2):
    # Do Something
```
```python
for i in list:
    # Do Something
```
```python
while var < 10:
    # Do Something
```

## Functions
```python
def func(var):
    # Do Something
```

```python
f = lambda x: x + 1
``` 

## Exceptions
```python
try:
    # Do Something
except Exception as e:
    # Handle Exception
else:
    # What to do if no exception
finally:
    # What to do always
```

## Lists
```python
list = [1,2,3,4,5]
```

```python
# Access element
list[0] = 'foo'
```

```python
# Append
list.append('foo')
```

```python	
# Remove
list.remove('foo')
```

```python
# Clear
list.clear()
```

```python
# Length
len(list)
```

## Tuples
```python
tuple = (1,2,3,4,5)
```

```python
# Access element Read-only
tuple[0]
```

## Dictionaries
```python
dict = {'foo':1, 'bar':2}
```

```python
# Access element
dict['foo']
```	

```python
# Add element
dict['foo'] = 'bar'
```

```python
# Remove element
del dict['foo']
dict.pop('foo')
```
## Classes
```python
class MyClass:
    def __init__(self, var):
        self.var = var
        self.__foo = 'foo'
    
    @property
    def foo(self):
        return self.__foo

    @foo.setter
    def foo(self, value):
        self.__foo = value
```

```python
# Create instance
instance = MyClass(var)
```

### Inheritance
```python
class MyClass(MySuperClass):
    def __init__(self, var):
        super().__init__(var)
```

## Files
File modes:
* `r_`: Read
* `w_`: Write
* `a_`: Append
* `x_`: Create
* `_t`: Text
* `_b`: Binary
* `__+`: Read and write

```python
# Open file
f = open('file.txt', 'r')
```

```python	
# Read file
content = f.read()
```

```python
# Write file
f.write('foo')
```

```python	
# Close file
f.close()
```

## Generators
```python
def generator():
    counter = 0
    yield counter
    counter += 1
```

```python	
# Generate values
generator = generator()
value = next(generator)
```

## High Order Functions
```python
filter(lambda x: x > 0, range(-5,5))
```

```python	
map(lambda x: x**2, range(5))
```

## External Modules
* [SQLite](/Modules/Sqlite.md)