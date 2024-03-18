//---------------------------Assignment1----------------------
let assignment1=document.getElementById("elzero");
console.log("1:",assignment1);

assignment1=document.getElementsByClassName("element")[0];
console.log("2:",assignment1);

assignment1=document.getElementsByTagName("div")[0];
console.log("3:",assignment1);

assignment1=document.getElementsByName("js")[0];
console.log("4:",assignment1);

assignment1=document.querySelector("#elzero");
console.log("5:",assignment1);

assignment1=document.querySelector(".element");
console.log("6:",assignment1);

assignment1=document.querySelector("[name='js']");
console.log("7:",assignment1);

assignment1=document.querySelector("div"); 
console.log("8:",assignment1);

assignment1=document.querySelectorAll("#elzero")[0];
console.log("9:",assignment1);

assignment1=document.querySelectorAll(".element")[0];
console.log("10:",assignment1);

assignment1=document.querySelectorAll("[name='js']")[0];
console.log("11:",assignment1);

assignment1=document.querySelectorAll("div")[0];
console.log("12:",assignment1);

assignment1=document.body.firstElementChild;
console.log("13:",assignment1);

assignment1=document.body.childNodes[3]; 
console.log("14:",assignment1);

assignment1=document.body.children[0]; 
console.log("15:",assignment1);

//---------------------------Assignment2----------------------
let e=document.getElementsByTagName("img");
for(let i=0;i<10;i++) {
    e[i].src="../images/flower.png";
    e[i].alt="Elzero Logo";

    e[i].width=80;
    e[i].height=80;
}

//---------------------------Assignment3----------------------

let input=document.querySelector("[name='dollar']");
let pounds=document.getElementsByTagName("span")[0];
let dollar=document.getElementsByTagName("span")[1];

input.oninput=function(){
    pounds.innerHTML=input.value||0; //To assign 0 if the field is empty
    dollar.innerHTML=((+input.value)*47.8).toFixed(2);

}

//---------------------------Assignment4----------------------
//Inner Html
let tempValue=document.getElementsByClassName("one")[0].innerHTML;
let num2=document.getElementsByClassName("one")[0].attributes.length; //instead of writing 2
document.getElementsByClassName("one")[0].innerHTML=document.getElementsByClassName("two")[0].innerHTML;
document.getElementsByClassName("two")[0].innerHTML=tempValue.concat(" ",num2);//space 2

//Title
let tempTitle=document.getElementsByClassName("one")[0].title;
document.getElementsByClassName("one")[0].title=document.getElementsByClassName("two")[0].title;
document.getElementsByClassName("two")[0].title=tempTitle;

//---------------------------Assignment5----------------------
//I have all pictures in 'e' from assignment2

for(let i=10;i<15;i++){
    if(e[i].hasAttribute("alt"))
        e[i].alt="Old";
    else
        e[i].alt="Elzero New";

    e[i].style.marginRight="10px";
}

//---------------------------Assignment6----------------------

let myForm=document.getElementById("assignment6-form");

myForm.onsubmit=function(event){
    event.preventDefault();
    let numOfElements=document.getElementsByClassName("input")[0].value;
    let text=document.getElementsByClassName("input")[1].value;
    let type=document.getElementsByClassName("input")[2].value;

    //remove previous children
    let list = document.getElementsByClassName("results")[0];
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for(let i=0;i<numOfElements;i++){
        let element=document.createElement(type);
        list.appendChild(element);
        let elementText=document.createTextNode(text);
        element.appendChild(elementText);

        element.className="box";
        element.title="Element";
        element.id=`id-${i+1}`;
    }
}