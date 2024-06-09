// Question 1
let multiDimentionalArrays = []
for(let i =0;i<=10; i++){
   multiDimentionalArrays===i
   console.log(i)

}

// Question 2
let matrixData=[
[0,1,2,3],
[1,0,1,2],
[2,1,0,1],
]
let rows= matrixData.length;
let columns= matrixData[0].length;
let matrix = [];
for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < columns; j++) {
    matrix[i][j] = matrixData[i][j];
  }
}

console.log(matrix);


// Question 3
let numericCounting = []
for(let i =1;i<=10; i++){
   numericCounting===i
   console.log(i)

}


// Question 4
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the table length:"));
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// Question 5
let fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//  Question 6
//  a
let counting = []
for(let i =1;i<=15; i++){
   counting===i
   console.log(i)

}

//  b
let backwardCounting = []
for (let i = 15; i > 0; i--) {
    console.log(i);
}

//  c
let even= []
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// d
let odd =[]
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// e
let series = [];
for (let i = 1; i <= 10; i++) {
    series.push(i * 2000); 
}
console.log(series.join(", "));

// Question 7
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
let search =prompt("search")
    alert("cookie is available at index " +search+ " in our bakery")
    alert ("We are sorry pastery is not available in our bakery")

 
// Question 8
let num =[24, 53, 78, 91, 12]
console.log("The largest number is",num[3])


// Question 9
let a = [24, 53, 78, 91, 12]
console.log("The smallest number is", a[4]);

// Question 10
let result = " ";
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        result +=i ;
    }
}
console.log(result)

