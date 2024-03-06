console.log("************L23_26_Assignment1***************");
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log("1.Print 100,000:",200_000/2); // 100000
console.log("2.Print 100,000:",10**5); // 100000
console.log("3.Print 100,000:",50_000*2); // 100000
console.log("4.Print 100,000:",100_001-1); // 100000
console.log("5.Print 100,000:",Math.floor(100_000.5)); // 100000 
console.log("6.Print 100,000:",Math.ceil(99_999.4)); // 100000 
console.log("7.Print 100,000:",Math.round(99_999.5)); // 100000 
console.log("8.Print 100,000:",Math.trunc(100_000.7)); // 100000 
console.log("9.Print 100,000:",+"100_000"); // 100000 
console.log("10.Print 100,000:",parseInt(100_000.7)); // 100000 

console.log("************L23_26_Assignment2**************");
console.log("Min Safe Integer:",-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log("************L23_26_Assignment3**************");
console.log("Max Safe Integer:",Number.MAX_SAFE_INTEGER.toString().length); // 16

console.log("************L23_26_Assignment4**************");
let myVar = "100.56789 Views";
console.log("Print 100:",parseInt(myVar)); // 100
console.log("Print 100.57:",+(parseFloat(myVar).toFixed(2))); // 100.57

console.log("************L23_26_Assignment5**************");
let num = 10;
console.log( +Number.isInteger(num) + true ); // 2

console.log("************L23_26_Assignment6**************");
let floatNum = 10.4;
console.log("1.Print 10:",Math.trunc(floatNum)); // 10
console.log("2.Print 10:",Math.floor(floatNum)); // 10
console.log("3.Print 10:",Math.round(floatNum)); // 10
console.log("4.Print 10:",parseInt(floatNum)); // 10  
console.log("5.Print 10:",+floatNum.toFixed()); // 10  
console.log("6.Print 10:",Math.ceil(--floatNum)); // 10

console.log("************L23_26_Assignment7**************");
console.log("Random number between 0 and 4:", Math.trunc(Math.random()*5)); //from 0 to 4


