// Question 1
let firstName =prompt("Enter first name: ")
let lastName =prompt("Enter last name: ")
let fullName =firstName + " " + lastName;
console.log(fullName)

// Question 2
let favMobile =prompt("Enter favourite monile")
console.log("My favourite is: ",favMobile)
console.log("Length of string is: ",favMobile.length)

// Question 3
let country = "pakistani"
let index =country.indexOf('n')
console.log("string: ",country)
console.log("index of n:", index)

// Question 4
let word = " Hello world"
let index1 =word.lastIndexOf('l')
console.log("string: ",word)
console.log("index of l:", index1)


// Question 5
let country1 = "pakistani"
let index2 =country[3]
console.log("string: ",country1)
console.log("character of 3:", index2)

// Question 6
let user =prompt("Enter first name: ")
let secondName =prompt("Enter last name: ")
let totalName =user + " " + secondName;
console.log("Hello, " , totalName, " ! Welcome.");

// Question 7
let originalWord = "Hyderabad";
let replacedWord = originalWord.replace("Hyder", "Islam");
console.log("Original word: " , originalWord , "\nReplaced word: " , replacedWord);

// Question 8
let message = "Ali and Sami are best friends. They play cricket and football together";
let replace = message.replace("and", "&");
console.log("Original word: " , message , "\nReplaced word: " , replace);

// Question 9
//string
let string ="472";
console.log("Value :string \n","Type: ", string)

//number
let num =472;
console.log("Value :number \n","Type: ", num)

// Question 10
let capLetter =prompt("Enter Alphabetic Letter: ")
let uppercase =capLetter.toUpperCase()
console.log(uppercase)

// Question 11
let tittleLetter =prompt("Enter Alphabetic Letter: ")
const newValue = tittleLetter[0].toUpperCase() + tittleLetter.slice(1).toLowerCase()
console.log(newValue);

// Question 12
let num1 =35.36
let num2=parseInt(35.36)
console.log(num1)
console.log(num2)

// Question 13
let userName =prompt("Enter symbol")
let symbol="@,!"
if(userName==="@"){
    console.log("ASCII code of" ,userName, "is 33")
}

// Question 14

let B =prompt("enter")
let A = ["cake", "apple pie", "cookie", "chips", "patties"]
if (B===A){
    console.log("this is available")
}
else{
    console.log("Item is not available") 
}

 // Question 15
    // Get password input
    let password = prompt("Enter Password")
            
    // Regular expressions for checking requirements
    let a = /[a-zA-Z].*\d|\d.*[a-zA-Z]/;
    let b = /^[^0-9]/;
    let c = /^.{6,}$/;
    
    // Check if password meets requirements
    if (a.test(password) || b.test(password) || c.test(password)) {
        alert("Please enter a valid password.\nRequirements:\n- It should contain alphabets and numbers.\n- It should not start with a number.\n- It should not start with a number.\n- It must be at least 6 characters long.");

        }

 // Question 16
 let university = "University of Karachi";
 document.write(university[0],"<br>")
 document.write(university[1],"<br>")
 document.write(university[2],"<br>")
 document.write(university[3],"<br>")
 document.write(university[4],"<br>")
 document.write(university[5],"<br>")
 document.write(university[6],"<br>")
 document.write(university[7],"<br>")
 document.write(university[8],"<br>")
 document.write(university[9],"<br>")
 document.write(university[10],"<br>")
 document.write(university[11],"<br>")
 document.write(university[12],"<br>")
 document.write(university[13],"<br>")
 document.write(university[14],"<br>")
 document.write(university[15],"<br>")
 document.write(university[16],"<br>")
 document.write(university[17],"<br>")
 document.write(university[18],"<br>")
 document.write(university[19],"<br>")
 document.write(university[20],"<br>")

// Question 17
let userInput ="pakistan"
document.write("Last character of user input is ", userInput[7])

// Question 18
let sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase for case-insensitive comparison
let lowerCaseSentence = sentence.toLowerCase();

// Word to search for
let wordToSearch = "the";

// Split the sentence into words
let words = lowerCaseSentence.split(" ");

// Initialize count
let count = 0;

// Display the count
document.write("Number of occurrences of '" + wordToSearch + "': " + count );