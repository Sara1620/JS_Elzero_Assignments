console.log("************Assignment1****************");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero, Use Map+Reduce

let solution=mix.map(el=>isNaN(Number(el))?el:"").reduce((acc,val)=>acc+val); //Elzero

console.log("************Assignment2****************");
let myString = "EElllzzzzzzzeroo";

// Elzero, Use Filter
let solution2=myString.split("").filter((el,index,arr)=>!arr.slice(index+1).includes(el)).join("");

console.log("************Assignment3****************");
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

//1.Concat with the inner array, then replace the comma with space
let solution3_1=myArray.reduce((acc,val)=>acc+val).replace(",","");

//2. Concat with the elements of the inner array
let solution3_2=myArray.reduce((acc,val)=>acc.concat(...val));

//recursion1
let flat=(array)=>array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val),[])
let solution3_3=flat(myArray).join("");

//recursion2
function flattenArray(arr) {
    return arr.reduce(function (acc, val) {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
}
let solution3_4=flat(myArray).join("");


console.log("************Assignment4****************");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let solution4=numsAndStrings.filter(el=>!isNaN(Number(el))).map(el=>-el);
// [-1, -10, 10, 20, -5, -3]

console.log("************Assignment5****************");
let nums = [2, 12, 11, 5, 10, 1, 99];

let solution5=nums.reduce( ( (acc,val)=> val%2==0 ? acc*val : acc+val) , 1); // 500