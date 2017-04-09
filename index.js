var points = [25, 16, 7, 9, 31];
var first = points[4]; // calling an element in first row
console.log(first);



// Learn this later
var dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60
};

function weigh(weight) {
    return weight;
}


// Boolean function
weigh(dog.weight);

var a = 5 == 5; // "==" That double equal is equal operator :) 

console.log(a); // will return as boolean if var is true/false.


// Boolean function
weigh(dog.weight);

var a = 5 == 7; // "==" That double equal is equal operator :) 

console.log(a); // will return as boolean if var is true/false.

// Boolean function
weigh(dog.weight);

var a = 5 < 7; // "> , < , <= , >= " Can also be used an return the results (Always put arrow first !) :)

console.log(a); // will return as boolean if var is true/false.

// If Statements 

var x = 10;

if (8 > x) {

    console.log("8 is greater!")

} else if (15 > x) {
    console.log("15 is greater")
} else {
    console.log("Arkkkk ! Try again :)")
}


// function style if statements
// WONDERFUL TECHNIC
var check = function (number) {
    if (number % 2 == 0) {
        console.log(number + " is even!");
    } else {

        console.log(number + " is odd.");

    }

}

check(4);
check(7);
check(10);
check(20);


// Switch Statements
var x = 13;

switch (x) {

    case 1:

        console.log("The number is one !");
        break;

    case 2:

        console.log("The number is two !");
        break;

    case 3:

        console.log("The number is three !");
        break;

    default:
        console.log("The number is " + x);
        break;
}

// Looping Technic
for (var loop = 0; loop < 5; loop++) {
    console.log(loop); // name your variable ANYTHING
}


// loops for string
var names = ["Frodo", "Sam", "Merry", "Pippin"];

//for (var i=0; i<names.length; i++) {
//    
//    console.log(names[i]);
//    
//}


// While loops
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++; // Increasing i to the names variables. If removes , The output will be infinite at Frodo overtimes !
}

// Do While loops
var i = 0;
do {
    console.log(names[i]);
    i++;
}
while (i < names.length) //It do first before execute !


// Do While loops stops at zero count Ex :
var i = 0;
do {
    console.log(names[i]);
    i++;
}
while (i < 0) // Output = Frodo

// Exercises
function count(x) {
  var numbers = [];
  if (x % 2 == 0) { // TODO check that x is even
    for (var i = 0; i <10; i = i +2) { // TODO assign i to 0; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  } else {
    for (var i = 1; i<10; i = i +2) { // TODO assign i to 1; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  }
  return numbers;
}
    console.log(x);
    
