var button = document.getElementById("add");
var input = document.getElementById("input");
var ul =document.querySelector("ul");
var clear=document.getElementById("clear");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    const item= `
        <li >
            <i  id="check" class="fa fa-check-square"></i>
            ${input.value}
             <i  id="delete"  class="fa fa-trash-o"  onclick="this.parentElement.style.display = 'none';" style="font-size:30px"></i>
        </li>
       `
    const position="beforeend";

    ul.insertAdjacentHTML(position,item)

    input.value="";
}

function addlistAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength()>0 && event.keyCode===13){
        createListElement();
    }
}
 
button.addEventListener("click" ,addlistAfterClick)

input.addEventListener("keypress" , addListAfterKeypress)

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
    }
}, false);

clear.addEventListener("click", function(){
  ul.remove;
  console.log("c");
 }
);