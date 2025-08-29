
function addStyle() {
  var para = document.querySelector("#paraId");
  para.style.color = "red";
  para.style.fontSize = "3rem";
  para.style.fontWeight = "bold";
  para.style.fontStyle = "italic";
}


function removeStyle() {
  var para = document.querySelector("#paraId");
  para.removeAttribute("style");
  para.classList.remove("para-style");
}


function next() {
  location.href = "Template/index.html";
}


function Back() {
  location.href = "../index.html";
}

let person = {
    id : 1,
    name : 'Shaon Khan',
    profession : 'Teaching'
    
}

for(let x in person){
   
}

var classBtn = document.querySelector("#classAddBtn");
classBtn.addEventListener("click", function () {
  var para = document.querySelector("#paraId");
  para.classList.add("para-style");
});

var button = document.querySelector('#addButton');
button.addEventListener("click",function(c,d){
   var b = document.querySelector('#paraId');
})(9,7);