// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //if we do not put {} in object.assign than all obj are going to merge in obj1 if we do then new object is created and all values going to merge in this


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // give output in arrays i mean all key are in array 
console.log(Object.values(tinderUser));// same for this 
console.log(Object.entries(tinderUser));// give us key value pair in array and key value also is in array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this checked tinderuser object if this keys are in object then it shows true if not it shows false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // at the time of destructuring in object i mean giving value we can change the variable name just like this is here are we change courseInstructor to instructor

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
