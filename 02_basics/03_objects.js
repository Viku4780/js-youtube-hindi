// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*
1. Create a Symbol

const mySymbol = Symbol('description');

2. Use the Symbol as a Key in an Object

You must use square bracket notation when assigning or accessing a property with a symbol:
const obj = {
  [mySymbol]: 'value associated with symbol'
};

3. Access the Value

console.log(obj[mySymbol]); // "value associated with symbol"

4. Why Use Symbols?

Symbols are unique — even if two symbols have the same description, they are not equal.
Symbol keys are not enumerated in for...in or Object.keys(), which makes them useful for internal object properties.


5. Get Symbol Keys
To retrieve symbol properties from an object:

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [ Symbol(description) ]
console.log(obj[symbols[0]]); // "value associated with symbol"


*/

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // with this if we change any properties values that will not be entertained
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());