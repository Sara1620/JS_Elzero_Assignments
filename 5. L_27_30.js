console.log("*******Assignment1***********");
let userName = "Elzero";
console.log("[]:",userName[0].toLowerCase()); //e
console.log("chartAt:",userName.charAt(0).toLowerCase()); // e
console.log("slice:",userName.slice(0,1).toLowerCase()); // e
console.log("split:",userName.split("",1).toString().toLowerCase()); // e
console.log("substring:",userName.substring(0,1).toLowerCase()); // e
console.log("substr:",userName.substr(0,1).toLowerCase().repeat(3)); // eee


console.log("******Assignment2**********");
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log("Z is in the word:",word.includes(letterZ)); // True
console.log("E is the startig letter:",word.startsWith(letterE.toUpperCase())); // True 
console.log("O is the ending letter:",word.endsWith(letterO.toLowerCase())); // True