const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);  // this shows empty object when running the code 
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  // here parentheses is valid if we use curly braces instead of parentheses then we have write return otherwise this code throws


const addTwo = (num1, num2) => ({username: "hitesh"})  // if we don't use parentheses then it does not return object it return undefined


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()