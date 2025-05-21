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
console.log(booleanIsLoggedIn);

//1 => ture; 0 => false
//"" => false
//"hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);