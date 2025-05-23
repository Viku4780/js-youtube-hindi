
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // here triple dot is called rest not spread it depends on where we are using this triple dot 

    return num1
}
/*
The spread and rest operators in JavaScript use the same syntax: ..., but they serve opposite purposes depending on the context.

 Spread Operator (...)
Purpose: Expands an iterable (like an array or object) into individual elements.

✅ Use Cases:
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

const numbers = [1, 2, 3];
Math.max(...numbers); // 3


🔹 Rest Operator (...)
Purpose: Collects multiple elements into a single array or object. Used in function parameters or destructuring.

✅ Use Cases:

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3); // 6

const [first, ...rest] = [10, 20, 30, 40];
// first = 10, rest = [20, 30, 40]

const { a, ...rest } = { a: 1, b: 2, c: 3 };
// a = 1, rest = { b: 2, c: 3 }


| Feature       | Spread `...`                    | Rest `...`                     |
| ------------- | ------------------------------- | ------------------------------ |
| **Function**  | Expands items                   | Collects items                 |
| **Context**   | Arrays, objects, function calls | Function params, destructuring |
| **Direction** | Outward                         | Inward                         |

*/
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));