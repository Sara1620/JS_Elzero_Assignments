let numberOne=10, numberTwo=20;
console.log(numberOne+""+numberTwo); // Normal Concatenation => 1020
console.log(typeof(numberOne+""+numberTwo)); // Normal Concatenation => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(`${typeof(numberOne+""+numberTwo)}`); //Template Literals Way => String

console.log(numberTwo +"\n"+numberOne);
console.log(`${numberTwo}
${numberOne}`);

//--------------------Assignment2----------------------
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//--------------------Assignment3----------------------

/* Print this statement without template literals
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

console.log("`I'm In \n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

//-----------------------Assignment4----------------------

let a = 21;
let b = 20;
console.log('_'+ (a+'_'+b).repeat(4) + '_'); // _21_2021_2021_2021_20_
