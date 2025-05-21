// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
/*
console.log("2" > 1);
"2" is a string, 1 is a number.

JavaScript converts "2" to number 2, then compares 2 > 1 → ✅ true.

console.log("02" > 1);
"02" becomes number 2, so 2 > 1 → ✅ true.

📌 Why? Because relational operators (>, <) convert both sides to numbers (unless both are strings).
*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
console.log(null > 0);
null is coerced to 0, so this becomes 0 > 0 → ❌ false.

console.log(null == 0);
null is only loosely equal to undefined, not to 0.

So null == 0 → ❌ false.

console.log(null >= 0);
This becomes 0 >= 0 → ✅ true.

📌 Weird, right?

null becomes 0 in comparisons (>, <, >=, <=)…

...but not in == comparisons!
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/*
console.log(undefined == 0);
undefined is only equal to null, not to 0.

So undefined == 0 → ❌ false.

console.log(undefined > 0);
undefined becomes NaN in numeric comparisons.

NaN > 0 → ❌ false

console.log(undefined < 0);
Same: NaN < 0 → ❌ false

📌 Any comparison involving NaN is always false.
*/


console.log("2" === 2);
/*
console.log("2" === 2);
=== is the strict equality operator.

No type conversion is done.

"2" is a string, 2 is a number.

So → ❌ false
*/