// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let arr = [[]]
// console.log (arr)

// ==========================================================

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// console.log (arr)

// ==========================================================


// 3. Write a program to print numeric counting from 1 to 10.

// for ( i = 1; i <= 10; i++){
//     console.log(i);
// }

// ==========================================================

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let number = +prompt ("Enter the number to show its multiplication table")

// let choice = +prompt ("Enter the length of multiplication table")

// for (let i = 1 ; i <= choice ;i++){

//     document.write (`${number} X ${i} = ${number * i} <br>`)
// }

// ==========================================================

// 5. Write a program to print items of the following array
// using for loop:

// let fruits = ['apple' , 'banana' ,'mango','orange','strawberry']

// for (let i =0 ; i<fruits.length ;i++){
//     console.log(`${fruits[i]}`)
// }


// for (let i=0 ; i < fruits.length; i++){
//     console.log (`Element at index ${i} is ${fruits[i]}`)
// }

// ==========================================================


// 6. Generate the following series in your browser. See
// example output.

// let Counting = [0 ,1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// document.write (`Reverse Counting: <br> ${Counting.reverse()}<br>`)

// even =[];
// odd =[];
// series = [];
// alpha =['k']

// for (i=0; i< Counting.length ;i++){
//     if (Counting[i] % 2 === 0){
//         even.unshift(Counting[i]);
//     }else{
//         odd.unshift(Counting[i]);
//     }
// }


// for (i=0; i< Counting.length-1 ;i++){
//     if (Counting[i]% 2===0){
//         series.push(`${Counting[i]}k`)
//     }
// }

// document.write (`Even: <br> ${even}<br>`)

// document.write (`Odd: <br> ${odd}<br>`)

// document.write (`Series: <br> ${series} <br>`)


// ==========================================================


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.

// let A=  ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// let userInput= prompt ("Welcome to THE SWEETS.What do you want to order?")

// function searchItem(array, item) {
//     return array.includes(item);
// }

// // Perform the search
// let found = searchItem(A, userInput);

// // Display the result
// if (found) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }

// ==========================================================

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (i=1 ; i<=20 ;i++){
//     document.write(`${i* 5}  <br>`)
// }

// ==========================================================
