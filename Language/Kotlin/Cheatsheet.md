# Kotlin

## Functions

```kotlin
fun foo(){}

// Java void is called a Unit
// The type Unit can be omitted
fun aVoidFunction(): Unit {}

fun bar(a: Int, b: Int): Int {
    return a + b
}
```

* Single expression functions
```kotlin
fun foo() = 1
```

* Variable number of arguments is allowed with varargs
```kotlin
fun printThings(mandatoryParam: String, vararg extraToPrint: String) {
    println(mandatoryParam)
    for (extra in extraToPrint) {
        println(extra)
    }
}
```

* Same effect with the spread operator
```kotlin
fun printThings(mandatoryParam: String, vararg extraToPrint: String) {
    println(mandatoryParam)
    extraToPrint.forEach { println(it) }
}

val array = arrayOf("a", "b", "c")
printThings("x", *array)
```

* Named Arguments
```kotlin
fun foo(a: String, b: Int){}

foo(a = "", b = 2)
foo(b = 1, a = "s")
```

* Default values
```kotlin
fun foo(a: String = ""){}
```

## I/O
```kotlin
println("Text")

// String interpolation
fun interpolate(value: String) = "This is a $value"
```

## Variables
* It's possible to declare variables outside of a class
```kotlin
// Constant
val foo: String = "foo"

// Variable
var bar: String = "bar"

// Kotlin is null-safe, which means that a variable can't be null unless explicitely declared as nullable
var baz: String? = null

// Ternary Operator for nullabe - Also known as Elvis operator
var bz2 = baz ?: "default"
```

// There is also a type inference system
// This will automatically have String type
var qux = "qux"
```

## Conditionals
```kotlin
if (condition) {
    // do something
} else {
    // do something else
}
```

```kotlin
var foo = "Text"

when (foo) {
    null -> doSomething()
    "Text" -> doSomethingElse()
    else -> doSomethingElse()
}
```

* Can be also used as expression to assign values
```kotlin
var foo = if (condition) {
    "Text"
} else {
    "Antoher Text"
}
```

```kotlin
var foo = when (condition) {
    true -> "Text"
    false -> "Another Text"
}
```

## Collections
* By default all collections are inmutable
    * To make them mutable use the mutable<collection>Of method
        * For example: mutableListOf(1,2,2)

### Arrays
```kotlin
val array = arrayOf(1, 2, 3)

// Size
println(array.size)

// By index
println(array[0])
println(array.get(1))
```

### Lists
```kotlin
val list = listOf(1, 2, 3)

// Size
println(list.size)

// By index
println(list[0])
println(list.get(1))
```

### Maps
```kotlin
val map = mapOf(1 to "a", 2 to "b", 3 to "c")

map.forEach{ key,value -> println("$key -> $value") }
```

## Loops
```kotlin
for(items in collection){}

// Functional approach - Lambda Syntax
collection.forEach{ it -> println(it) }
collection.forEach{ itemOfTheCollection -> println(itemOfTheArray) }

// With index
collection.forEachIndexed{ index, item -> println("$index: $item") }
```

## Classes
```kotlin
class Foo {
    // Properties
    var bar: String = ""

    // Constructors
    constructor()
    constructor(bar: String) {
        this.bar = bar
    }

    // Methods
    fun foo() {
        println("foo")
    }

    fun bar(bar: String) {
        println("bar: $bar")
    }
}
```

* Short signature
```kotlin
class Foo(bar: String) {
    fun foo() {
        println("foo")
    }

    fun bar(bar: String) {
        println("bar: $bar")
    }
}
```

* Init blocks
```kotlin
class Foo(arg1: String) {
    val bar: String

    // There can be multiple blocks that will be ran in the order they are declared
    init {
        bar = arg1
    }
}
```

```kotlin
// Shortest syntax
class Foo(val arg1: String) {

    // With secondary constructor
    constructor(): this("")
}
```

* Property access syntax
```kotlin
class Foo {
    var bar: String = ""

    fun foo() {
        bar = "foo"
        println(bar)
    }
}

println(Foo().bar)
```

* By default kotlin will provide default getters/setters for properties, but they can ve overridden
```kotlin
class Foo(val arg1: String = "Default value"){
    var arg2: String? = null
        
        get() {
            println("the returned value is $field")
            return field
        }
        
        set(value) {
            field = value
        }
}
```

* Type guard
```kotlin
if (object is Class) {
    // do something
}

if(object !is Class) {
    // do something else
}
```

* Explicit casting
```kotlin
val object: Any = "Text"
val text: String = object as String
```

* Also by default, everything is alway **PUBLIC**
    * Other visibilitites are:
        1. internal: Only visible withing the same module
        2. private: Only visible within the same <ins>file</ins>
        3. protected: Visible within the same class and subclasses

## Interfaces
```kotlin
interface Foo {
    val aProperty: String

    fun foo()

    // Default implementation
    fun defaultFoo() {
        println(aProperty)
    }
}

// Both can be provided on the same file
class Bar: Foo {
    override val aProperty: String
        get() = "Bar class"

    // Override is a mandatory keyword
    override fun foo() {
        super.foo()
        this.extraFunctionality()
    }
}
```
