let myNumbers = [1, 2, 3, 4, 5];
let[a1,,,,e1]=myNumbers;
console.log(a1 * e1);

console.log("************Assignment2****************");
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
let [a2,b2,c2,[d2,e2,[f2,g2]]]=mySkills;
console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);

console.log("************Assignment3****************");
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let [,a3,b3,c3]=arr3.concat(arr1);
console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);// My Best Friends: Shady, Mahmoud, Ahmed

console.log("************Assignment4****************");
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

let {age:a4, working:w, country:c4, hobbies:[h1,,h3]}=member;

console.log(`My Age is ${a4} And I am ${w ? "" : "Not"} Working`);
// My Age is 30 And I am Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My hobbies are: ${h1} and ${h3}`);
// My hobbies are: Reading and Programming

console.log("************Assignment5****************");
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
    },
    Origin: "30 USD",
    },
};
let [o,a5]=Object.keys(game.releases);
let {title:t, developer:d5, releases: {[o]:[u,j], [a5]:{US:u_price, JAP: j_price}, Origin:or } }=game;

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games

console.log(`My Best Release is ${o} It Released in ${u} & ${j}`);
// My Best Release is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim

console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

console.log("************Assignment6****************");
let chosen=1;
let friends=[
    {title:"Osama", age:39, available:true, skills:["HTML","CSS"]},
    {title:"Ahmed", age:25, available:false, skills:["Python","Django"]},
    {title:"Sayed", age:33, available:true, skills:["PHP","Laravel"]},
];

let title,age,available,skill2;

switch(chosen){
    case 1:
        [{title,age,available,skills:[,skill2]}]=friends;
        break;

    case 2:
        [,{title, age,available,skills:[,skill2]}]=friends;
        break;

    case 3:
        [,,{title, age,available,skills:[,skill2]}]=friends;
        break;
}

console.log(title);
console.log(age);
console.log(`${available?"Available":"Not Available"}`);
console.log(skill2);
