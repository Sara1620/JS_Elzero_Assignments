console.log("************Assignment1****************");
// Create Your Object Here
let member=new Object({
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails:function(){
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
    },

});
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt


console.log("************Assignment2****************");

let objMethodOne={
    property: "Method One",
};
console.log("One:",objMethodOne.property); // "Method One"


let objMethodTwo=new Object()
objMethodTwo.property="Method Two";
console.log("Two:",objMethodTwo.property); // "Method Two"


let objMethodThree=new Object({
    property:"Method Three",
});
console.log("Three:",objMethodThree.property); // "Method Three"


let objMethodFour=Object.create({});
objMethodFour.property="Method Four";
console.log("Four:",objMethodFour.property); // "Method Four"


let objMethodFive=Object.assign({},{property:"Method Five"});
console.log("Five:",objMethodFive.property); // "Method Five"


console.log("************Assignment3****************");

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject=Object.assign({},{a},threeNums,twoNums);
console.log("Assignment3:",finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//---------------------Assignment4-----------------
//Object.keys
let myFavGames = {

    //Nested obj1
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },

    //Nested obj2
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },

    //Nested obj3
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  //let objectLength = "???????";
  let objectLength = Object.keys(myFavGames).length;
  for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
  
    // Check If Nested Object Has Property (bestThree)
    // if (???????) {
    //   console.log("- Game Has Releases");
    //   console.log(`First => ???????`);
    //   console.log(`Second => ???????`);
    //   console.log(`Third => ???????`);
    // }

    if (myFavGames[Object.keys(myFavGames)[i]].bestThree!=undefined) { //or
      // if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")){ //or
      // if ("bestThree" in myFavGames[Object.keys(myFavGames)[i]]){ //or
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
      console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
      console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
    }

    console.log("#".repeat(20));
  }
  
  // Ouput
  
  "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"