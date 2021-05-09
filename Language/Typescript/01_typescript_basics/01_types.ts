// Implicit types
let age = 15;

// Explicit types
let var1; // Same as let var:any
let something: number;

// function 
function add(a: number, b: number) {
    return a + b;
}

function someFunc(n:number,) {
    if (n % 2 === 0) {
        return "even";
    }
}

// const value = someFunc(4); Won't compile because it can returns undefined; same on null
const value = someFunc(4)!; //Use ! to say "I'm sure this won't return undefined"

// Arrays
let fruits: string[] = ["orange", "apple", "banana"];
let multiTypeArray: (string | boolean)[] = ["orange", true, "banana"];

