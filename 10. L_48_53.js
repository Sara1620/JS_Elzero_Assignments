console.log("************Assignment1****************");
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100

for(let i=start; i<=end; i+=start){
    if(i==exclude)
        continue;
    console.log(i);
}

console.log("************Assignment2****************");
start = 10;
end = 0;
let stop = 3;

/* Output
10
09
08
07
06
05
04
03
*/

for(let i=start; i>=stop; i--){
    if(i<start)
        console.log(end+""+i);
    else
        console.log(i);

    if(i==stop)
        break; //After being printed
}


console.log("************Assignment3****************");
start = 1;
end = 6;
let breaker = 2;

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4  */

for(let i=start; i<=end; i++){
    console.log(i);
    for(let j=breaker; j<end; j+=2){
        console.log("--",j);
    }
}

console.log("************Assignment4****************");
let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
    if(index>jump){
        console.log(index);
        index-=jump;
    }
    else
        break;

}

/* Output
10
8
6
4 */

console.log("************Assignment5****************");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh" */

let counter=+true;
for(let i=+false; i<friends.length; i++){
    if(friends[i].startsWith(letter.toUpperCase()))
        continue;
    
    console.log(`${counter++} => ${friends[i]}`);
}

console.log("************Assignment6****************");
start = 0;
let swappedName = "elZerO";

// Output  "ELzERo"

let Name="";

for(let i=start; i<swappedName.length; i++){
    if(swappedName.charAt(i)===swappedName.charAt(i).toLowerCase())
        // Name = Name.concat(swappedName.charAt(i).toUpperCase());
        Name+=swappedName.charAt(i).toUpperCase();

    else
        // Name = Name.concat(swappedName.charAt(i).toLowerCase());
        Name+=swappedName.charAt(i).toLowerCase();
}
console.log(Name);

console.log("************Assignment7****************");
start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

/* Output
2
3
4  */

for(let i=start; i<mix.length-1; ){
    i++;
    if(typeof mix[i] === 'number'){
        console.log(mix[i]);
    }
}