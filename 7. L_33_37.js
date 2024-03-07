console.log("************Assignment1****************");

// Test Case 1: If num is less than 10, print the number and add 2 0's before it 
//let Num = 9; // "009"

// Test Case 2: If num is greater than 10 and less than 100, print the number and add one 0s before it 
//let Num = 20; // "020"

// Test Case 3: If num is greater than or equal 100, print the number as it is 
let Num = 110; // "110"

if (Num<10){
    console.log("00" + Num);
}
else if (Num>10 && Num<100){
    console.log("0" + Num);
}
else{
    console.log(Num);
}



console.log("************Assignment2****************");

let num = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"

"{num1} Is Not The Same Value Or The Same Type As {str2}"

"{str} Is The Same Type As {str2} But Not The Same Value"

//1,2.
if (num==str){
    console.log(`${num} Is The Same Value As ${str} `);
    if (num!==str)
        console.log(`${num} Is The Same Value As ${str} But Not The Same Type`);
}

//3.
if (typeof num != typeof str2  &&  num != str2)
    console.log(`${num} Is Not The Same Value Or The Same Type As ${str2}`);


//4.
if (typeof str == typeof str2 && str != str2)
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
    



console.log("************Assignment3****************");

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

let num1 = 10;
let num2 = 30;
let num3 = "30";

//num3>num1    type of num3 != type of num2
//num3 > num1  num3==num2   typeof num3 != typeof num2
//num3 != num1   type of num3 != type of num1   type of num3 != type of num2

if(num3!=num1){
    if(typeof num3 != typeof num2){
        if(num3>num1){
            console.log(`${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num2}`);
            
            if(num3==num2){
                console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`);
            }
        }
        if(typeof num3 != typeof num1){
            // console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
            console.log(`{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`);
        }
    }  
}

console.log("************Assignment4****************");

num1 = 11;
num2 = 10;
num3 = 11;
let num4 = 33;

// Condition 1
if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4
if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5
if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6
if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}

