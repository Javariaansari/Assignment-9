// Question 1
let A=65;
let Z=90;
let a=97;
let z=122;
if(A <Z){
   console.log("Uppercase")
}
else if(a<z){
    console.log("Lowercase")
}

// Question 2
let num1 = parseInt(prompt('Enter num1: '));
let num2 = parseInt(prompt('Enter num2: '));
let result;
if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num1 < num2) {
    console.log( num2 + " is larger than " + num1);
} else {
    console.log( "Both numbers are equal.");
}

 // Question 3
 let num = parseInt(prompt("Enter a number"));
    
 let resultText;
 if (num > 0) {
   console.log( num + " is a positive number.");
 } else if (num < 0) {
    console.log( num + " is a negative number.");
 } else {
      console.log("The number is zero.");
 }

// Question 4
let char =prompt("Enter a Alphabetic Character: ")
let isVowel;
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {    
        console.log (true);
} else {
    console.log(false);
}

// Question 5
let correctPassword = "abc123";

// Get the value of the input field
let userPassword =prompt("Enter your password")
let enterPassword =prompt("Enter lock")

// Check if the user has entered a password
if (userPassword === enterPassword) {
    console.log("right")
    if (userPassword === correctPassword) {
        console.log("Correct Password");
    } else {
 console.log("Incorrect password");
    }
}

// Question 6
let greeting;
let hour = 13;
if (hour < 18) {
greeting = "Good day";
}
console.log(greeting)

// Question 7
let time =parseInt(prompt("Enter numbers: "))
if(time>=0 &&time <1200){
console.log("Good Morning")
}
else if(time>=1200 &&time <1700){
    console.log("Good afternoon")
}
if(time>=1700 &&time <2100){
    console.log("Good Morning")
}
if(time>=2100 &&time <2359){
    console.log("Good Morning")
}