const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com');

/*
✅ const name = "hitesh";
This is a primitive string.

It's the usual way we write strings in JavaScript.

Lightweight and fast.

typeof name will be "string".

✅ const gameName = new String("hitesh");//there are many benifits with this we have access of many methods and property of object

This creates a String object using the new String() constructor.

It wraps the string in an object.

Heavier and not commonly needed.

typeof gameName will be "object".

💡 Key Differences:
| Feature    | `name`                     | `gameName`                                               |
| ---------- | -------------------------- | -------------------------------------------------------- |
| Type       | string (primitive)         | object (String object)                                   |
| Memory     | Lightweight                | Heavier (uses more memory)                               |
| Comparison | `name === "hitesh"` → true | `gameName === "hitesh"` → false (because it's an object) |

*/

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));