var a = 10;
var a=12;
document.writeln(a);

let b=100;
//document.writeln(b);
let c= "Meawrer";
let v = 23.566;

document.writeln(typeof(b));
document.writeln(typeof(c));
document.writeln(typeof(v));

//Type Casting

//Number to String
let s = b.toString();
document.writeln(s);


//String to Number
let x="100.03";
let y=12.676;
x=parseFloat(x);
document.writeln("</br>"+ typeof(x));

document.writeln("</br>"+ Number("ASDDDF"));
document.writeln("</br>"+ Number("175646.99"));
document.writeln("</br>"+ y.toFixed(3));
document.writeln("</br>"+ y.toPrecision(5));

//User Input

// let studFirstName = prompt("Enter your First Name") ;
// let studLastName = prompt("Enter your Last Name");

let studFirstName, studLastName  = prompt("Enter your First Name")+ prompt("Enter your Last Name");

document.writeln("</br> <p style='color:red;'>"+ 
    studFirstName + " " + studLastName +"</p>");




