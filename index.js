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