/*******************Assignment1************************/
// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

console.log(10 * 20 % 15 ** 3 + 190 + 10  - 400); // 0  


/*****************Assignment2************************/
let num = 3;

// Solution One
console.log(num+num); // 6

num = 3;
// Soultion Two
console.log(num * --num); // 6

num = 3;
// Solution Three
console.log(num++ + --num); // 6

num = 3;
// Soultion Four
console.log(num ** --num - ++num); // 6

num = 3;
// Solution Five
console.log(++num * --num / --num); // 6

num = 3;
// Solution Six
console.log(++num + true + num % --num ); // 6

/*****************Assignment3************************/

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log( +num2 * (true + true)); // 20

// Solution Three
console.log(+num2 + ++num2 - true); // 20

num2="10";
// Solution Four
console.log(+num2 % +num2 + true + +num2); // 20

// Solution Five
console.log(+num2 * +num2 / +num2 + +num2 ); // 20


/*****************Assignment4************************/

let points = 10;

console.log(points + true + true + true); // 13

console.log(points - true - true); // 8;

