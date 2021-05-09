# C++

## Compiling
C++ is compiled direct to the current machine language. Because of that C++ is normally fastar than other languages that are compiled to byte-code like Java, with the counter part of being less portable. Most common tool for compiling is g++ (GNU Compiler).

```bash
g++ Test.cpp
```

Options are: <br>
 - -o Test -> Name of the compiled output
 - -O2 -> Compiler optimization activated
 - -Wall -> Active Warnings
 - -c -> Only compile. Useful when a program composed of more than one modules that have to be compiled together.

## Hello World
```c++
#include <iostream>
using namespace std;
int main() {
cout << "Hello World!" << endl;
return 0;
}
```

## Main Function
Main entry point to the program is main function. It should be out of a class and have `int` type. In any other case program won't run!

To catch params from command line, following args can be received: 

```c++
int main(int argc, char *argv[])
```
Where `argc` means *argument count* and `*argv`is a pointer to the first character of those inputs.

## Include sentences
They're used to import libraries to the program. `cout`, `end` and similars are not standard on c++ and are imported through `iostream` library.

## Namespaces
Namespaces are similar to package names. They are mandatory in any sentence, but the line `using namespace <x>` can be used to avoid typing it on any line.

## I/O
- Standard output with EOL separator
```c++
cout << "Hello World" << endl;
``` 
- Standard error output
```c++
cerr << "Error Message" << endl;
```

- Standard input
```c++
string input;
cin >> input;
```

## Pointers
```c++
int foo = 3; // A value

int *foo_pointer;
foo_pointer = &foo; // Make the pointer reference the value

*foo_pointer = 5; //Change the value through the pointer
```

## Arrays
```c++
int foo[5];
```
With the declaration the space in memory will be reserved directly. No need to initialize it.

Out of bounds it's not checked by the compiler.

Array variable type is actually a pointer to the first memory adress of the array. Adressing is done using pointer arithmetic. That means: 

```
foo[0] = First memory address of the array
foo[i] = foo[0] address + i*datatype size
```

Because of that, playing with indexing is relative easy:
```c++
int foo[5] = {1,2,3,4,5};
int *foo_pointer;
foo_pointer = foo; // foo_pointer references foo[0]

foo_pointer++; // Now the pointer references to foo[1] (Only if the pointer and the array have the same type)
```

```c++
int foo[5] = {1,2,3,4,5}

int *foo_pointer1;
int *foo_pointer2;

foo_pointer1 = foo;
foo_pointer2 = foo[4];

int indexDistance = foo_pointer2 - foo_pointer1; // Returns the distance between the idexes, instead of foo[4] - foo[0];
```

### Dynamic memory Management
To reserve memory adresses for arrays of dynamic size, use of the `new` operator is needed:

```c++
int n;

cout << "Array size: ";
cin >> n;

char *array = new char[n];

// Use of the array

delete[] array; // Free space in memory
```

## Casting
```c++
int *pointer;
char *q = (char *) p;
```

## Strings
Strings can be declared as an array of `char` with `\0` terminator or include the `string` library.

```c++
#include <iostream>
#include <string>
using namespace std;

string s; // Declaration

cin >> s; // Initialization
string s("Test"); //Initialization

s+= "test2"; // Concat

cin >> getline(cin,s); // Read line

cout << s; // Output

s.length(); // Get length
s.size(); // Get length

s[3]; // Access a char on position 3 (No index validation)
s.at(3); // Access a char on position 3 (With index validation)

if (s == "abcd") {
// String comparison: Either as two strings or between string and array

// Comparison of the content as long as at least one of the two is a string object, otherwise comparison of the addresses!
}
```

## Classes
```c++
    class Date{
        private:
            int day;
            int month;
            int year;
        public:
            Date(int d, int m, int y){
                day = d;
                month = m;
                year = y;
            }

            int get_day{return day};
            // ...
    }; // Note the semicolon!!!
```
Default visibility is `private`

Common practice is to separate classes using a header file. That means creating a `name.h` header file that contains class declarations (Like an abstract class), and a `name.cpp` with the method implementations

**name.h**
```c++
class Date {
  public:
    Date(int d, int m, int y);
    int get_day() { return day; }
    int get_month() { return month; }
    int get_year() { return year; }
    int day_of_week();
  private:
    int day;
    int month;
    int year;
};
```

**name.cpp**
```c++
#include "date.h"

// Constructor
Date::Date (int d, int m, int y){
    day = d;
    month = m;
    year = y;
}

int Date::day_of_week(){
    // ...
}
```

## Objects
```c++
#include "date.h"

using namespace std;

int main(){
    Date d(25,4,2021); // Local Vble.

    Date *p = new Date(28,10,2015); // Object saved in Heap

    cout << p-> day_of_week() << endl; // Access of fields/methods

    delete p; //Free space on heap

    return 0;
}
```
Common practice is to work with pointers to save space on sending objects as parameters.

Like in Java, C++ provides empty constructor with no args.

## Destructors
When a Object is going to be deleted, either by `delete` statement or at programms ending, C++ calls automatically a method with name `~Classname`. In case is not declared the compiler will add a empty one.

In case the object has ressources linked like open files, etc. they have to be freed here.

## Objects as attributes
```c++
class Person {
    char firstname[20];
    char lastname[20];
    Date birthday;
  public:
    Person (const char *first, const char *last,
            int d, int m, int y): birthday(d, m, y) {
        // ... 
    }
};
```
When objects are declared as attribute of a class, the place in memory is saved within the same space of the class.

## Inner classes
```c++
class Person {
  public:
    class PersoenlicheDaten {
      public:
        PersoenlicheDaten(): alter(-1), BMI(45) {}
            int alter ;
            float BMI ;
        }; 
};

int main(int argc, char**argv) {
  Person::PersoenlicheDaten pd;
  Person::PersoenlicheDaten * pdPtr = new Person::PersoenlicheDaten() ;
  cout << pd.BMI << "/" << pdPtr->BMI << endl ;
}
```

## Pass by value / reference
In C++ all datatypes (Also classes) are primitive data types and therefore all parameters are passed by value.

Pass by reference has to be indicated explicitly.
```c++
void f(Test * tPtr) {
  tPtr->x = 2 ;
}

// Pass by reference shortcut
void f2(Test &tRef){
    tRef.x = 2;
}

int main(int argc, char**argv) {
    Test t;
    f(&t);
    f2(t);
    cout << t.x << " --> change’’ << endl ; }
```

When an argument has to be passed by reference (to save memory space), but its value shouldn't change, a constant pointer can be used: 

```c++
void f(const Test * tPtr) {
  tPtr->x = 2 ;  // Throws compilation error
}
```

## Generics - Template function / classes
```c++
template<class T> void addOne(T x) {
  cout << x + 1 << endl ;
}
// ...
float floatVar;
int intVar;
addOne<float>(floatVar) ; // Template-Parameter float
addOne<int>(intVar) ;     // Template-Parameter int
addOne(intVar) ;            // Template-Parameter detected by the compiler
```

In case the type is declared on compilation time, data type can be omitted.

```c++
template<class T> class TemplateTest {
  T attribut ;
  public:
    Test() : attribut(0) {}
}
// ...
TemplateTest<int> t() ;
TemplateTest<int> *  tPtr = new TemplateTest<int>() ;
```

## Vector
Equivalent to ListArray on Java

```c++
#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector<int> intVec(5) ; // 5 Elements 
    vector<float> intVec ; // 0 Elements 
    intVec.push_back(7) ; // Push value 7
    int z = intVec.pop_back() ; // Pop Value 7
    intVec[2] = 15 ; // 0-based index
    cout << intVec.size() << endl;
}
```












