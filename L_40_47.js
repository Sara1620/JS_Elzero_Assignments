console.log("************Assignment1****************");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(-(++num),--num));

//Method3
let val=+true;
console.log(myFriends.splice(--val,--myFriends.length));

//Method4
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.splice(false,num)); // ["Ahmed", "Elham", "Osama"];

console.log("************Assignment2****************");
//Don't use numbers or slice method
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
//1
let Num=+true;
console.log(friends.splice(Num,++Num)); 

//2
friends = ["Ahmed", "Eman", "Osama", "Gamal"];
Num=+true;
console.log( (friends[Num] +" "+ friends[++Num]).split(" ")  ); // ["Eman", "Osama"]


console.log("************Assignment3****************");
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("************Assignment4****************");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase() ); // ZERO

console.log("************Assignment5****************");

//Check whether 'JS' is in haystack or no, and print 'found' if it exists

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle))
    console.log("1. Found");

if(haystack.indexOf(needle) != -1)
    console.log("2. Found");

if(haystack.lastIndexOf(needle) != -1)
    console.log("3. Found"); 

console.log("************Assignment6****************");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
// a c d e f x y
allArrs = arr1.concat(arr2);
console.log(allArrs.sort().slice(arr2.length).join("").toLowerCase()); // fxy

