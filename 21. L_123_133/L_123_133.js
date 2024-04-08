console.log("------------------Assignment1----------------------");

let setOfNumbers=new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

//Last element
let iterator=setOfNumbers.keys();
for(let i=0;i<setOfNumbers.size-1;i++)
    iterator.next();
console.log(iterator.next().value);

//Another way to get the last element
console.log( [...setOfNumbers][setOfNumbers.size-1] );

console.log("------------------Assignment2----------------------");

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// Needed Output:  (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log([...new Set(myFriends.sort())]);

console.log("------------------Assignment3----------------------");  

let myInfo = {
username: "Osama",
role: "Admin",
country: "Egypt",
};

/* Needed Output
Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true */

//Object.entries(myInfo) returns an array of 3 arrays,
let myMap=new Map(Object.entries(myInfo));

//another way
let myMap2=new Map()
for(i in myInfo) //object keys
    myMap2.set(i,myInfo[i]);

console.log(myMap);
console.log(myMap2);

console.log(myMap.size);
console.log(myMap2.size);

console.log(myMap.has("role"));
console.log(myMap2.has("role"));

console.log("------------------Assignment4----------------------");  
let theNumber = 100020003000;
//Needed Output: 123 
console.log(+[...new Set([...theNumber.toString()].sort())].splice(+true).join(""));

console.log("------------------Assignment5----------------------");  
let theName = "Elzero";

//1
console.log( [...theName] );

//2
console.log( theName.split("") );

//3
console.log( Array.from(theName) );

//4
console.log( Object.assign([],theName) );

//5
let arr=[]
for(i of theName)
    arr.push(i);
console.log(arr);