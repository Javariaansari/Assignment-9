//  Question 1
let city = prompt("Enter your city")
if (city === "karachi"){
    console.log("“Welcome to city of lights”")
}

//  Question 2
let gender =prompt("Enter your gender")
if (gender === "male"){
    console.log('Good Morning Sir')
}
else if(gender === 'female'){
    console.log('Good Morning Ma’am')
}



// Question 3
let trafficLight =prompt("Enter colour of traffic light")
if (trafficLight === "red"){
    console.log("Must stop")
}
else if(trafficLight === 'yellow'){
    console.log('Ready to Move')
}
else if(trafficLight === 'green'){
    console.log('Move Now')
}


// Question 4
let currentFuel =prompt("Enter fuel in litres")
if(currentFuel <= 0.25){
    console.log("“Please refill the fuel in your car”")
}


// Question 5
// a
let a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b
let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c
 let c = 12;
 if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    // d
    let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e
 if (true){
    alert("True");
}
if (false){
alert("False");
}
// f 
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// Question 6
let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
        let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
        let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
        let totalMarks = parseFloat(prompt("Enter total marks:"));

        // Calculate total obtained marks
        let obtainedMarks = subject1 + subject2 + subject3;
        // console.log(obtainedMarks)
        // Calculate percentage
        let percentage = (obtainedMarks / totalMarks) * 100;

        // Determine grade
        let grade;
        if (percentage <= 80) {
            console.log("Greather than and equal to 80")
            console.log("A-one")
            console.log("Excellent")
        } else if (percentage <= 70) {
            console.log("Greather than and equal to 70")
            console.log("A")
            console.log("Good")
        } else if (percentage <= 60) {
            console.log("Greather than and equal to 60")
            console.log("B")
            console.log("You need to be improve")
        } else if (percentage >= 60) {
            console.log("Less than 60")
            console.log("Fail")
            console.log("Sorry")
        }

// Question 7
const guess =prompt("Enter a secret number")
const secretNumber = Math.floor(Math.random () *10 ) + 1
if (guess === secretNumber) {
    console.log("“Bingo! Correct answer”")
} else if (guess + 1 === secretNumber) {
    console.log("“Close enough to the correct answer”")
}
else{
    console.log("Wrong Number")
}

// Question 8
const number = prompt("Enter a number");
            
            // Check if the number is divisible by 3
            if (number % 3 === 0) {
                console.log("Hurrah!")
            }

// Question 9
let num = prompt("Enter a number")
let evenNumber = 2
let oddNumber =1
if(num === num*evenNumber){
    console.log("Even Number")
}

// Question 10
let temperature =prompt("Enter a temperature")
if(temperature > 40){
    console.log("It is too hot outside")
}
else if(temperature > 30){
    console.log("The Weather today is Normal")
}
if(temperature > 20){
    console.log("Today’s Weather is cool")
}
if(temperature > 10){
    console.log("OMG! To day’s weather is so Cool")
}

//  Question 11
 let firstNumber = prompt('Enter first number:'); 
let secondNumber = prompt('Enter second number: ');
let operations = "+,-,*,/,%"
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
console.log(firstNumber +secondNumber)
console.log(firstNumber - secondNumber)
console.log(firstNumber * secondNumber)
console.log(firstNumber / secondNumber)
console.log(firstNumber % secondNumber)