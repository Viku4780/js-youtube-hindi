// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

/*
| Feature         | `Map` (`new Map()`)                                                      | Plain Object (`{}`)                                                                                  |
| --------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Keys            | **Any value** (objects, functions, primitives)                           | **Strings** (or symbols) only                                                                        |
| Insertion order | Preserves the order you add entries                                      | Not guaranteed in older engines; modern spec does preserve string‑key order, but it can be confusing |
| Size            | Has a built‑in `.size` property                                          | You must compute size yourself (`Object.keys(obj).length`)                                           |
| Prototype       | Doesn’t inherit from `Object.prototype` (no risk of key‑name collisions) | Inherits methods like `.toString`, which can clash if you use those names as keys                    |

### Adding and accessing entries

// Map
const map = new Map();
map.set('name', 'Alice');
map.set(42, 'The answer');
console.log(map.get('name')); // "Alice"
console.log(map.size);        // 2

// Object
const obj = {};
obj.name = 'Alice';
obj['age'] = 30;
console.log(obj.name);                  // "Alice"
console.log(Object.keys(obj).length);   // 2


###  Looping through them

A. Looping a Map
Maps implement the iterable protocol, so you can use for…of directly:

for (const [key, value] of map) {
  console.log(key, '→', value);
}

Why?

Map is designed to be iterated in insertion order.

for…of reads entries one by one as [key, value] pairs.

You can also destructure just keys or values

for (const key of map.keys()) {  //}
for (const value of map.values()) {//}

B. Looping a plain Object
Objects aren’t iterable by default, so you have a few options:

for…in

js
Copy
Edit
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, '→', obj[key]);
  }
}
Why hasOwnProperty?

Filters out inherited properties from the prototype chain.

Object.keys + for…of

js
Copy
Edit
for (const key of Object.keys(obj)) {
  console.log(key, '→', obj[key]);
}
Why?

Returns an array of your own (enumerable) keys, so inheritance is no issue.

Object.entries + for…of (ES2017+)

js
Copy
Edit
for (const [key, value] of Object.entries(obj)) {
  console.log(key, '→', value);
}
Why?

Gives you [key, value] pairs just like Map, but you first convert the object to an array of entries.

4. When to use which
Use a Map when:

You need keys that aren’t strings (e.g. objects, functions).

You want guaranteed insertion‑order iteration.

You want an easy .size property.

Use a plain Object when:

You only need simple string‑keyed lookups.

You want the literal {} syntax (often more concise).

You don’t mind doing a bit of extra work for size or iteration.

###########################################################################

“Insertion order” simply means “the order in which you added things.”

For a Map: if you do

js
Copy
Edit
map.set('first', 1);
map.set('second', 2);
map.set('third', 3);
then when you loop over it, you’ll always see 'first' → 1, then 'second' → 2, then 'third' → 3—exactly in the same sequence you called set().

Why it matters: some data structures don’t guarantee that the items come back in the same order you put them in. With a Map, you get predictable ordering, which is often useful when you care about the sequence.

Contrast with plain objects: older JavaScript engines didn’t strictly preserve the order of object properties. Modern engines mostly do preserve string‑keyed insertion order, but there are corner cases (like numeric keys being sorted separately). Because of those nuances, if you really need strict insertion order, Map is the safer choice.

Example

js
Copy
Edit
const map = new Map();
map.set('a', 'apple');
map.set('b', 'banana');
map.set('c', 'cherry');

for (const [key, value] of map) {
  console.log(key, value);
}
// Logs:
// a apple
// b banana
// c cherry
Here, “a” was added first, “b” second, “c” third—and you see them in exactly that order when you iterate.

*/


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }