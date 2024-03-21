
let classesToAdd=document.getElementsByClassName("classes-to-add")[0];
let classesToRemove=document.getElementsByClassName("classes-to-remove")[0];
let currentClassesElement=document.querySelector("div[title='Current']")
showClasses(); //show the current classes at the beginning


classesToAdd.onblur=function(){
    if(classesToAdd.value!==""){
        let value=classesToAdd.value.toLowerCase().split(" ");
        for(let i=0; i<value.length; i++)  
            currentClassesElement.classList.add(value[i]);
    }
    classesToAdd.value=""; 
    showClasses();
}

classesToRemove.onblur=function(){
    if(classesToRemove.value!==""){
        let value=classesToRemove.value.split(" ");
        for(let i=0;i<value.length;i++)  
            currentClassesElement.classList.remove(value[i].toLowerCase());
    }
    classesToRemove.value=""; 
    showClasses();
}


function showClasses(){
    let spanParent=document.querySelector(".classes-list div");
    while (spanParent.hasChildNodes()) {
        spanParent.removeChild(spanParent.firstChild);
    }

    if(currentClassesElement.classList.length>0){
        let arr=currentClassesElement.classList.value.split(" ").sort();

        for(let i=0;i<arr.length;i++){
            let span=document.createElement("span");
            spanParent.appendChild(span);
            span.append(arr[i]);
        }
    } 
    
    else
        spanParent.append("No Classes To Show");

}
