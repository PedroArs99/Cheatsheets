# Typescript

## Basic Types
### Primitives
```typescript	
let a: number = 1;
let b: string = "hello";
let c: boolean = true;
```

They can be infered by the compiler:
```typescript	
let a = 1;
let b = "hello";
let c = true;
```

### Arrays
With primitive syntax:
```typescript
let a: number[] = [1, 2, 3];
let b: string[] = ["hello", "world"];
let c: boolean[] = [true, false];
```

With generic-like syntax:
```typescript
let a: Array<number> = [1, 2, 3];
let b: Array<string> = ["hello", "world"];
let c: Array<boolean> = [true, false];
```

### Any
When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal.

`noImplicitAny` (tsconfig.json option): Implicit any means that when the type is not provided the compiler will assume it is a type `any`. This is the same as a default JS code. Turning the flag on will make the compiler throw an error if the type is not provided. The error can anyway be turned off by explicit declaring with the any type.

### Functions
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

Parameters (And variables in general) can be optional with the `?` operator:
```typescript	
function add(a: number, b?: number): number {
    return a + (b ? b : 0);
}
```

When using the optional operator, the compiler forces to check the type instead of returning `undefined`.

### Object types
```typescript
let pt: {
    x: number;
    y: number;
};
```

## Union Types
TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.

```typescript
type concatenable = string | number;
```

Without explicitly declaring it:
```typescript
let a: string | number = "hello";
```

In function parameters:
```typescript
function add(a: number, b: number | string): string {
    return `${a}${b}`;
}
```

### Literal Types
```typescript
type literal = "value1" | "value2";
```	
This is similar to a enum type but less verbose.

Other use would be:
```typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

And also cominable with non literal types:
```typescript
function configure(x: Options | "auto") {
  // ...
}
```

### Type proving
```typescript	
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

```typescript	
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```

## Type Aliases
```typescript
type Point = {
    x: number;
    y: number;
}
```

## Interfaces
```typescript
interface Point {
    x: number;
    y: number;
}
```

### Type vs Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## Type Assertions
```typescript	
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```	

Or:
```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

### Non-Null assertion operator
When a type is marked with the `?` operator the compiler forces to prove is the value given is not `null` or `undefined`. When calling the function or assigning the value, if it´s sure that the value won´t be undefined or null on runtime, it can be marked with the `!` operator.

If the type indicated is wrong `null` is returned.


## Type Narrowing
### Type guards
```typescript
typeof padding === "number"
```
This is only available for:
- string
- number
- bigint
- boolean
- symbol
- undefined
- object
- function

```typescript	
object instanceof Point
```
Useful for objects created with the `new` operator.

### Type Predicates
User defined type guards:
```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```


## Generics
### Generic functions
```typescript	
function first<T>(list: T[]): T {
    return list[0];
}
```

### Generic constraints
```typescript
function getName<T extends {name:string}>(person: T): string {
    return person.name;
}
```


## Function Overload
Function can be overloaded by creating a new function with the same name and different number of arguments. Overloading by type is not possible since all the code is being compiled to vanila JS, where types doesn't exist.


## Rest Parameters
```typescript
function add(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
}
```
It can be called with as many parameters as you want.



## Destructuring
```typescript
type Point = {
    x: number;
    y: number;
};

function getX({x, y}: Point): number {
    return x;
}
```



## Index Signatures
Allow to create object with unknown number of properties, but where the shape of all of them is known.

```typescript
interface filter {
    [query: string]: string
}
```



## Tuples
```typescript
type Tuple<T1, T2> = [T1, T2];
```

Advantages:
```typescript	
const tuple: Tuple<number, string> = [1, "hello"];
```
* In this case, `tuple[2]` is always getting a compilation error.
* It is possible to destructure the tuple in a function.
```typescript
function getSecond<T1, T2>({a,b}: Tuple<T1, T2>): T2 {
    return b;
}
```

### Tuples with optionals
```typescript
type point = [number, number, number?];
```

### Tuples with rest elements
```typescript
type queue = [head, ...elements, tail];
```


## Classes
```typescript
class Point {
    x: number;
    y: number;
}
```

With default values:
```typescript
class Point {
  x = 0;
  y = 0;
}
```

`strictPropertzInitialization` in `tsconfig.json` forces to set a default value for every property or initialize them in the constructor.

Fields marked with `readonly` are not allowed to be modified outside the constructor.

### Constructor
```typescript
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
```
With Parameter syntax:
```typescript
class Point {
  constructor(
    public x: number,
    public y: number
  ){
    // No Body necessary
  }
}
```

### Inheritance
```typescript
class Point3D extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
}
```

### Methods
```typescript
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceTo(other: Point): number {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}
```

### Getters / Setters
```typescript
class Point {
  _x: number;
  _y: number;

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }
}
```
*Note: If `get`exists but there's no `set`attribute is automatically `readonly`*

### Interfaces
```typescript
interface List {
    add(value: number): void;
    remove(value: number): void;
}

class ArrayList implements List {
    private _data: number[];

    add(value: number): void {
        this._data.push(value);
    }

    remove(value: number): void {
        this._data.splice(this._data.indexOf(value), 1);
    }
}
```

### Visibility
Visibility is only checked in compile time. On runtime, all the visibiliy is ignored since everything is being compiled to vanilla JS where there's no visibilities.

```typescript
class Point {
  // Available in the global scope
  public x: number;
  // Available only for this and derived classes
  protected y: number;
  // Not available anywhere
  private z: number;
}
```
*Default is `public`*

#### Cross instance Private access
```typescript
class A {
  private _x: number;

  public copy(other: A){
    this._x = other._x;
  }
}
```
*Allowed even though `x` is private*

### Static Members
```typescript
class Point {
  static origin: Point = new Point(0, 0);
}
```
*There's no static classes like in Java*

### Abstract Members
```typescript
abstract class Point {
  x: number;
  y: number;

  // Implementation depends on the coordinates system
  abstract distanceTo(other: Point): number;
}
```
*Abstract classes can't be instantiated*

## Downleveling
For example:
```typescript
`Hello ${person}, today is ${date.toDateString()}!`;
```

Gets compiled to:
```typescript
"Hello " + person + ", today is " + date.toDateString() + "!";
```

Template strings are a feature introduced in ES6. This is called downleveling and is useful to make code compatible with older browsers.

By default the compiler downlevels to ES3.
Using the `--target` the compiler translates the code to a explicit version. 

## Utility Types
* `Partial<T>`: Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
* `Required<T>`: The opposite of `Partial<T>`. Constructs a type with all properties of Type set to required.
* `Readonly<T>`: Constructs a type with all properties of Type set to readonly.
* `Record<T,K>`: Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
```typescript
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```
* 