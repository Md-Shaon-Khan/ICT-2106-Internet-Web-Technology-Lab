//Object

//student variables without object creation
var name = "Mehrin Anannya";
var roll = 12345;
var year = "1st";
var courses = ["Operating System", "Data Structure", "Algorithm"];

//student variables with object creation
var student1 = {
    name : "Mehrin Anannya",
    roll : 12345,
    year : "1st",
    courses : ["Operating System", "Data Structure", "Algorithm"]
}

document.writeln(student1.name + " " + student1.roll + " " + student1.year + " " +student1.courses);

//using constructor
function Student(name, roll, year, courses){
    this.name= name;
    this.roll = roll;
    this.year = year;
    this.courses = courses;

    this.display = function(){
        document.writeln(this.name + " " + this.roll + " " +
             this.year + " " +this.courses);
    }
}
var student2 = new Student("ASD", 123, 2025, 
    ["Operating System", "Data Structure", "Algorithm"]);
student2.display();
document.writeln(student1.courses[1]);

//Math function

document.writeln("<br>");
//getElementById
var text = document.getElementById("header1").innerText;
document.writeln(text);
text.innerHTML = "<p style='color:red;'>Hello</p>";

var text1= document.getElementsByTagName("h3");
document.writeln(text1[0].innerText);
document.writeln(document.getElementsByClassName("header2")[0].innerText);

var text2=document.querySelector('.header3');
document.writeln(text2.innerText);

var text3=document.querySelectorAll('.header3')[1];
document.writeln(text3.innerText);

document.querySelector("li a").innerHTML = "newContact";
//document.writeln(text4.innerHTML = "Hi");
