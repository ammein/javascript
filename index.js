//
//
//var points = [25, 16, 7, 9, 31];
//var first = points[4]; // calling an element in first row
//console.log(first);
//
//
//
//// Learn this later
//var dog = {
//    name: 'Buddy',
//    breed: 'Golden Retriever',
//    weight: 60
//};
//
//function weigh(weight) {
//    return weight;
//}
//
//
//// Boolean function
//weigh(dog.weight);
//
//var a = 5 == 5; // "==" That double equal is equal operator :) 
//
//console.log(a); // will return as boolean if var is true/false.
//
//
//// Boolean function
//weigh(dog.weight);
//
//var a = 5 == 7; // "==" That double equal is equal operator :) 
//
//console.log(a); // will return as boolean if var is true/false.
//
//// Boolean function
//weigh(dog.weight);
//
//var a = 5 < 7; // "> , < , <= , >= " Can also be used an return the results (Always put arrow first !) :)
//
//console.log(a); // will return as boolean if var is true/false.
//
//// If Statements 
//
//var x = 10;
//
//if (8 > x) {
//
//    console.log("8 is greater!")
//
//} else if (15 > x) {
//    console.log("15 is greater")
//} else {
//    console.log("Arkkkk ! Try again :)")
//}
//
//
//// function style if statements
//// WONDERFUL TECHNIC
//var check = function (number) {
//    if (number % 2 == 0) {
//        console.log(number + " is even!");
//    } else {
//
//        console.log(number + " is odd.");
//
//    }
//
//}
//
//check(4);
//check(7);
//check(10);
//check(20);
//
//
//// Switch Statements
//var x = 13;
//
//switch (x) {
//
//    case 1:
//
//        console.log("The number is one !");
//        break;
//
//    case 2:
//
//        console.log("The number is two !");
//        break;
//
//    case 3:
//
//        console.log("The number is three !");
//        break;
//
//    default:
//        console.log("The number is " + x);
//        break;
//}
//
//// Looping Technic
//for (var loop = 0; loop < 5; loop++) {
//    console.log(loop); // name your variable ANYTHING
//}
//
//
//// loops for string
//var names = ["Frodo", "Sam", "Merry", "Pippin"];
//
////for (var i=0; i<names.length; i++) {
////    
////    console.log(names[i]);
////    
////}
//
//
//// While loops
//var i = 0;
//while (i < names.length) {
//    console.log(names[i]);
//    i++; // Increasing i to the names variables. If removes , The output will be infinite at Frodo overtimes !
//}
//
//// Do While loops
//var i = 0;
//do {
//    console.log(names[i]);
//    i++;
//}
//while (i < names.length) //It do first before execute !
//
//
//// Do While loops stops at zero count Ex :
//var i = 0;
//do {
//    console.log(names[i]);
//    i++;
//}
//while (i < 0) // Output = Frodo
//
//// Exercises
//function count(x) {
//    var numbers = [];
//    if (x % 2 == 0) { // TODO check that x is even
//        for (var i = 0; i < 10; i = i + 2) { // TODO assign i to 0; give i the limit of x; and increment by 2
//            numbers.push(i);
//        }
//    } else {
//        for (var i = 1; i < 10; i = i + 2) { // TODO assign i to 1; give i the limit of x; and increment by 2
//            numbers.push(i);
//        }
//    }
//    return numbers;
//}
//    console.log(x);
//
//
//// Objects
//var myObj1 = new Object();
//myObj1.Car = "Ford";
//myObj1.Year = 2010;
//myObj1.Model = "Mustang";
//myObj1.cost = 50000;
//myObj1.cost = 2000;
//console.log(myObj1);
//
//var myself = new Object();
//
//myself.Name = "Amin";
//myself.Gender = "Male";
//myself.Age = 23;
//myself.Ambition = "Web Developer / UI UX Designer / Web Designer";
//console.log(myself);
//
//
//var myObj2 = { Car : "honda" , Year:2017, Model:"Toyota" };
//console.log(myObj2);
//
//var myObj3 = new myFun("Toyota" , 2015, "Corolla" , 40000);
//console.log(myObj3);
//
//function myFun(a,b,c,d) {
//    this.Car = a;
//    this.Year = b;
//    this.Model = c;
//    this.Cost = d;
//}
//
//console.log(myObj1["Car"]);
//console.log(myObj2.Car);
//
//
//// Introduction to functions
//function myFun(argA , argB) {
//    var myRet = argA + " " + argB;
//    return("you passed" + myRet);
//}
//
//console.log (myFun(" Hello " ,1));
//myFun(" World" , 2);
//myFun(" Hi" , 3);
//myFun(" Boo" ,4);
//myFun(" Woo" ,5);
//
//
//// DOM
////document.getElementById("btn1").addEventListener("click" , function() {
////    alert("hello again again");
////});
////
////console.dir(document);
////
//// Accessing DOM
//// ID pull
////var myOutput = document.getElementById("output");
////console.dir(myOutput);
////
////myOutput.innerHTML = "New Content";
//
//
//// Class pull (Accessing DOM)
//
//var myBtn = document.getElementsByClassName("btn1");
//
//console.dir(myBtn);
//
//window.onload = function () {
//    var myBtn2 = document.getElementById("btn2");
//    var myOutput = document.getElementById("output");
//    myBtn2.onclick = myFun;
//    //myBtn2.addEventListener("mouseover", myFun);
//    var clicked = document.getElementById("form");
//    var outputClicked = [];
//
//
//}
//
//
////console.dir(document);
////console.log(document.URL + " " + document.title);
////
////myOutput.innerHTML = "NEW CONTENT";
////myOutput.style.color = "blue";
////myOutput.style.backgroundColor = "purple";
////myImg = document.getElementById("myImage");
////
////var myBtn = document.getElementsByClassName("btn");
////myBtn[1].innerText = "NEW<BR> BUTTON";
////console.dir(myBtn[1]);
////
////document.getElementById("btn1").addEventListener("click", function () {
////    myImg.src = "http://lorempixel.com/100/200";
////    this.innerHTML = "Clicked";
////    this.style.backgroundColor = "yellow";
////})
//
//
//// Javascript Element selection plus
//var myEl = document.querySelectorAll(".btn , li");
//console.log(myEl);
//
//for (i = 0; i<myEl.length; i++) {
//    myEl[i].addEventListener("click" , allFun);
//}
//
//function allFun() {
//    this.style.backgroundColor = "pink";
//}
//
//
//// Create new elements using Javascript
//var myEle = document.createElement("h1");
//var myContent = document.createTextNode("New element");
//var myOutput = document.getElementById("output");
//
//myEle.appendChild(myContent);
//myOutput.appendChild(myEle);
//
//// Javascript Element Children
//var myNodes = document.getElementById("wrapper").children;
//console.log(myNodes);



// Javascript Operators dynamic updates
//'use strict';
//var kosong = 0;
//var tambah = kosong++;
//
//var output = document.getElementById("output");
//var btn1 = document.getElementById('btn1');
//var btn2 = document.getElementById('btn2');
//
//
//btn1.onclick = function() {
//    kosong = kosong + 1;
//    output.innerHTML = tambah + kosong;
//}
//btn2.onclick = function() {
//    kosong--;
//    output.innerHTML = tambah + kosong;
//}
//
//var c = false;
//var d = true;
//var e = !(c && d)? "This was true , hooray !" : "was False , Baddddd :("; // So cool , right ?
//console.log(e); // return false
//
//var cat = "cat";
//var dog = "dog";
//
//console.log(cat && dog); //return last string line of code
//
//console.log(cat || dog); //return top string line of code (NOT value)

// Conditional Statements Else If
//var textOutput = document.getElementById("outputText");
//var a = 1 ;
//
//document.getElementById("btn").addEventListener("click" , function(){
//    var myVal = document.getElementById("numA").value;
//    if (myVal=="red" || myVal == a){
//        myVal = "Wow its red or equal to the value of a :)";
//    } else {
//        myVal = "Are you sure you are not entering 'red' instead of " + "'" + myVal + "'" + "? <br>";
//    }
//        textOutput.innerHTML =  myVal;    
//}); // Awesomeeeeeeeeeeeeee


// Javascript Looping
//var textOutput = document.getElementById("outputText");
//var a = 1 ;
//
//document.getElementById("btn").addEventListener("click" , function(){
//    var myVal = document.getElementById("numA").value;
//    if (myVal=="red" || myVal == a){
//        myVal = "Wow its red or equal to the value of a :)";
//    } else {
//        myVal = "Are you sure you are not entering 'red' instead of " + "'" + myVal + "'" + "? <br>";
//    }
////    var i = 0;
////    while (i<=5){
////        myVal = myVal + i + ". again ! <br>";
////        i++;
////    }
//    
//    for(i=0; i<5 ; i++){
//        myVal += i + ". Repeat me <br>";
//        textOutput.innerHTML = myVal;
//    }
//});

// Javascript Method Math
//var output = document.getElementById("outputText");
//var a = "My Output <br>";
//
//document.getElementById("btn").onclick = function() {
//    var myVal = document.getElementById("myVal").value;
//    a = a + "myVal is " + myVal + "<br>";
//    a = a + Math.ceil(Math.random()*100) + "<br>";
//    output.innerHTML = a; // Math.floor (Rounded Numbers)
//};

// ParseInt Method (Change the number into integer)
//var output2 = document.getElementById("outputText");
//var a = "My Output <br>";
//var b = 3;
//document.getElementById("btn").onclick = function() {
//    var myVal = document.getElementById("myVal").value;
//    console.log("Gets Input");
//    myVal = parseInt(myVal);
//    console.log("Begin parseInt");
//    if (myVal > b){
//        console.log("Greater than b value");
//        a = a + "myVal is Greater than b<br>";
//    }
//    a = a + "myVal is " + myVal + "<br>";
//    a = a + "b is " + myVal + "<br>";
//    a = a + Math.ceil(Math.random()*50) + "<br>";
//    output2.innerHTML = a; // Math.floor (Rounded Numbers)
//};


//Javascript Date and Time
//var outputDate = document.getElementById("outputText");
//var a = "My Output<br>";
//
//document.getElementById("btn").onclick = function () {
//    // Fetch Current Date , Year , Time and Time Zone
//    var myDate = new Date();
//    console.log("Fetching Date");
//    //    Date.now()
//    var hoursNight = "PM";
//    var hoursNight = "AM";
////    outputDate.innerHTML = myDate.getHours();
////    outputDate.innerHTML ="Day " + myDate.getDay();
//    console.log("Successful Output Date");
//};

// Intro to Javascript Objects (JSON)
//var outputJSON = document.getElementById("outputText");
//var a = "My Output<br>";
//var myObj = {"firstName" : "Laurence" , 
//             "company" : "Discovery Vip"
//            };
//console.log("Recorded Object");
//
//document.getElementById("btn").onclick = function() {
//    outputJSON.innerHTML = myObj.firstName + " " + myObj.company;
//    console.log("Successful Output Object");
//};


//JSON Object Array Multiple Items
var outputJSON = document.getElementById("outputText");
var a = "My Output<br>";
var myObj = {
    "students": [{
        "firstName": "Laurence",
        "company": "Discovery Vip"
        }, {
        "firstName": "Mike",
        "company": "Unemployed"
        }, {
        "firstName": "Bob",
        "company": "UI/UX Designer"
        }]
};
console.log("Recorded Object");

document.getElementById("btn").onclick = function () {

    for (i = 0; i < myObj.students.length; i++) {
        outputJSON.innerHTML += myObj.students[i].firstName + " " + myObj.students[i].company + "<br>";
        console.log("Successful Output Object");
    }

};






