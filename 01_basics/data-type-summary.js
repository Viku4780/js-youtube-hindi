//  Primitive
/*
Definition: Basic, immutable (cannot be changed) data types.

Stored by: Value

Examples:

String

Number

Boolean

null

undefined

BigInt

Symbol

let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (a is not affected)

*/

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  //typeof null is object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)  generally all non primitive are object even function we call object function
/*
Definition: More complex data structures that can store multiple values.

Stored by: Reference

Examples:

Object

Array

Function

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (both refer to the same object)

*/

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
| Feature         | Primitive Types          | Non-Primitive Types           |
| --------------- | ------------------------ | ----------------------------- |
| Stored as       | Value                    | Reference                     |
| Mutability      | Immutable                | Mutable                       |
| Memory location | Stack                    | Heap                          |
| Comparison      | By value                 | By reference                  |
| Examples        | `number`, `string`, etc. | `object`, `array`, `function` |

*/