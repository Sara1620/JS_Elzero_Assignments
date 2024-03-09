console.log("************Assignment1****************");
function sayHello(theName, theGender) {
    let gender = theGender==="Male"
                ? "Mr "
                : theGender==="Female"
                ?"Miss "
                :"";
    console.log(`Hello ${gender}${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


console.log("************Assignment2****************");
function calculate(firstNum, secondNum, operation="add") {
    if(typeof secondNum !== "number" || secondNum==="undefined"){
        console.log("Second number isn't found");
        return;
    }

    let result = operation==='add'
                ? firstNum+secondNum
                : operation==='subtract'
                ? firstNum-secondNum
                : operation==="multiply"
                ? firstNum*secondNum
                : "Accepted operations are addition, subtraction and multiplication";
    console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("************Assignment3****************");
function ageInTime(theAge) { //accept years
    if(theAge<10 || theAge>100){
        console.log("Age is out of range");
        return;
    }

    let days = Math.round(theAge*365.25);
    let hours = days*24;
    let minutes = hours*60;
    let seconds = minutes*60;
    console.log(`${theAge*12} Months`);
    console.log(`${theAge*52} Weeks`);
    console.log(`${days} Days`);
    console.log(`${hours} Hours`);
    console.log(`${minutes} Minutes`);
    console.log(`${seconds} Seconds`);    
}  

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("************Assignment4****************");
function checkStatus(a,b,c){
    let userName =  typeof a === "string"
                    ? a
                    : typeof b === "string" 
                    ? b
                    : c;
    let age =   typeof a === "number"
                ? a
                : typeof b === "number"
                ? b
                : c;
    let status = typeof a === "boolean"
                ? a
                : typeof b === "boolean"
                ? b
                : c;
    let msg = status === true
            ? "You Are Available For Hire"
            : "You Are Not Available For Hire";

    console.log(`Hello ${userName}, Your Age is ${age},${msg}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


console.log("************Assignment5****************");
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);    
    for(let i=startYear; i<=endYear; i++)
        document.write(`<option value= ${i}>${i}</option>`);
    document.write(`</select>`);
}

createSelectBox(2000, 2021);

console.log("************Assignment6****************");
function multiply(...numbers){
    let result=1;
    for(let i=0; i<numbers.length; i++){
        if(typeof numbers[i] === "number")
            result *= Math.trunc(numbers[i]);
            // result *= parseInt(numbers[i]);
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
