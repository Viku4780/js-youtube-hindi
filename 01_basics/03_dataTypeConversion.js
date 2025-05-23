let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(Number(true));

//"33" => 33
//"33abc" => this also convert in number if we convert when we see the typeof this variable but when we see the value stored in variable it show NaN
//true => 1; false => 0


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);



let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//joh pehle aayega uske hisaab se hoga process output- "122"
console.log(1 + 2 + "2");//output-"32"

console.log(true);//output-true
console.log(+true);//output-1   The + symbol is the unary plus operator, which tries to convert the value to a number.

/*
+true === 1

JavaScript has type coercion — it automatically tries to convert values from one type to another when needed.

Value	+value (numeric conversion)
true	1
false	0
null	0
undefined	NaN
"" (empty string)	0
"123"	123

*/


//prefix vs postfix increment operators
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
console.log(++gameCounter);
console.log(gameCounter++);

/*
 1. ++a → Prefix Increment
This increases the value of a before it is used in the expression.

So ++a will increment a from 3 to 4, and returns 4.

let a = 3;
let b = ++a;  // a becomes 4, b = 4


2. a++ → Postfix Increment
This uses the value of a before increasing it.

So a++ will return 4 but then update a to 5.

let a = 4;
let b = a++;  // b = 4, then a becomes 5

*/
