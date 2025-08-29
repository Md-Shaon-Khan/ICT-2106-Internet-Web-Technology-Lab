
var a = 10;
var a = 12; 
let b = 100;
let c = "Meawrer";
let v = 23.566;

let varsOutput = document.getElementById("varsOutput");
varsOutput.innerHTML = `
a = ${a} <br>
b = ${b} (Type: ${typeof b}) <br>
c = "${c}" (Type: ${typeof c}) <br>
v = ${v} (Type: ${typeof v}) <br>
`;


let s = b.toString();

let x = "100.03";
let y = 12.676;
x = parseFloat(x);

let castingOutput = document.getElementById("castingOutput");
castingOutput.innerHTML = `
Convert Number to String: ${s} (Type: ${typeof s}) <br>
Convert String to Number: ${x} (Type: ${typeof x}) <br>
Invalid Number: ${Number("ASDDDF")} <br>
Valid Number: ${Number("175646.99")} <br>
y.toFixed(3): ${y.toFixed(3)} <br>
y.toPrecision(5): ${y.toPrecision(5)}
`;


function calculateSum() {
  let num1 = 25;
  let num2 = 45;
  let sum = num1 + num2;
  let calcOutput = document.getElementById("calcOutput");
  calcOutput.innerHTML = `Sum of ${num1} + ${num2} = ${sum}`;
}

function getStudentName() {
  let firstName = prompt("Enter your First Name");
  let lastName = prompt("Enter your Last Name");
  let userOutput = document.getElementById("userOutput");
  if(firstName && lastName){
    userOutput.innerHTML = `Student Name: <span style="color:red">${firstName} ${lastName}</span>`;
  } else {
    userOutput.innerHTML = "Name input was cancelled.";
  }
}


function showAlert() {
  alert("Hello! This is an alert from JavaScript.");
}

function askAge() {
  let age = prompt("Enter your age");
  let alertOutput = document.getElementById("alertOutput");
  if(age) {
    alertOutput.innerHTML = `You entered age: ${age}`;
  } else {
    alertOutput.innerHTML = "No age was entered.";
  }
}


let mathExample = Math.sqrt(144); 
let randomNum = Math.floor(Math.random() * 100); 
console.log("Math.sqrt(144):", mathExample);
console.log("Random number (0-99):", randomNum);


let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log("Fruits Array:", fruits);


for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i+1}: ${fruits[i]}`);
}
