console.log("********Assignment1**********");

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let pattern=/\d{4}:[a-z]{2}\d(:\d{4}){6}/ig;
console.log(pattern.test(ip));

console.log("********Assignment2**********");

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']
let pattern2=/\bOs\d*O\b/ig;
console.log(specialNames.match(pattern2));

console.log("********Assignment3**********");

let phone = "+(995)-123 (4567)";
let pattern3=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g; 
console.log(phone.match(pattern3));

console.log("********Assignment4**********");
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
/       : Beginning of the regex pattern
https?  : Either http or https, 's' is optional
:\/\/   : pattern matches '://'
(?:  )? : optional non-capturing group
[-\w]+  : hyphen or any word char can be repeated once or more
\.      : dot
([-\w]+) : capturing group, range (hyphen or any word char) can be repeated once or more
\.      : dot
\w+     : word char repeated once or more
(?: )?  : optional non-capturing group
\.      : dot
\w+     : word char repeated once or more
\/?     : the symbol / is obtional
.*      : returns every element except new line or other line terminators
/       : End of the regex pattern
i       : insensitive case
*/

console.log("********Assignment5**********");

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let pattern4 = /(\d{2}((\s(-\s)?)|\/)){2}(\d{4}|\d{2})/g;
console.log(date1.match(pattern4)); // "25/10/1982"
console.log(date2.match(pattern4)); // "25 - 10 - 1982"
console.log(date3.match(pattern4)); // "25 10 1982"
console.log(date4.match(pattern4)); // "25 10 82"

console.log("********Assignment6**********");

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let pattern5 = /(https?:\/\/)?(\w+\.)+\w{2,}((:\d{1,5})?((\/\w+)?(\.\w+)?)*(\?id=\d+&\w+=\w+)?)?/ig;//to match other examples

console.log("1: ",url1.match(pattern5));
console.log("2: ",url2.match(pattern5));
console.log("3: ",url3.match(pattern5));
console.log("4: ",url4.match(pattern5));
console.log("5: ",url5.match(pattern5));