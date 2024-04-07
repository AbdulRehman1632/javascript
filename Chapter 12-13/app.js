// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// if (charCode >= 48 && charCode <= 57) {
//     document.write ("Input is a number");
// }
// // Check if the input is an uppercase letter
// else if (charCode >= 65 && charCode <= 90) {
//     document.write ("Input is an uppercase letter");
// }
// // Check if the input is a lowercase letter
// else if (charCode >= 97 && charCode <= 122) {
//     document.write ("Input is a lowercase letter");
// }
// // If the input doesn't fall into any of the above categories
// else {
//     document.write ("Input is not a number or letter");
// }

// ======================================================================================

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let integer1 = +prompt (
//     "enter your first number"
// )

// let integer2 = +prompt (
//     "enter your second number"
// )

// if (isNaN(integer1) || isNaN(integer2)){
//     alert(`you entered ${integer1} and ${integer2} are invalid`)
// }
// else if (integer1>integer2){
//     document.write(`${integer1} is greater than ${integer2}`)
// }
// else if (integer2>integer1){
//     document.write(`${integer2} is greater than ${integer1}`)
// }
// else if (integer2===integer1){
//     document.write(`${integer1} is equals to ${integer2}`)
// }


// ======================================================================================


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// let user = prompt (
//     "Enter a number"
// )
// if (user>1){
//     document.write ("this number is a positive ")
// }
// else if (user<0){
//     document.write ("this number is a negative ")
// }
// else if (user===0){
//     document.write ("this number is zero")
// }else {
//     document.write (
//         "Please enter a valid number"
//     )
// }


// ======================================================================================



// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let v = prompt (
//     "Enter a alphabet \n (SINGLE WORD)"
// )
// if (v.length ! =1 || !isNaN(v)){
//     alert ("Invalid input !! please enter only one character from a to z")
// }
// else if (
//     v == "a" ||
//     v == "e" ||
//     v == "i" ||
//     v == "o" ||
//     v == "u" 
// ){
//     document.write(`The character you entered ${v} is a vowel`)
// }
// else {
//     document.write(`The character you entered ${v} is not a vowel`)
// }



// ======================================================================================



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:



// let password = prompt (
//     "enter a password"
// )

// let confirm_password = prompt (
//     "enter password one more time to confirm it"
// )

// if (password===confirm_password){
//     alert("Password Match!!!")
// }
// else {
//     alert(
//         "your entered password and confirm password are not same"
//     )
// }


// ======================================================================================



// 6. This if/else statement does not work. Try to fix it:


// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)}
// else {
// greeting = "Good evening";
// alert(greeting)
// }



// ======================================================================================


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// let user =prompt (
//     "Enter number i will tell u the time"
// )

// if (100 >= user){
//     document.write ("Its 1 am")
// }
// else if (200 >= user){
//     document.write ("Its 2 am")
// }
// else if (300 >= user){
//     document.write ("Its 3 am")
// }
// else if (400 >= user){
//     document.write ("Its 4 am")
// }
// else if (500 >= user){
//     document.write ("Its 5 am")
// }
// else if (600 >= user){
//     document.write ("Its 6 am")
// }
// else if (700 >= user){
//     document.write ("Its 7 am")
// }
// else if (800 >= user){
//     document.write ("Its 8 am")
// }
// else if (900 >= user){
//     document.write ("Its 9 am")
// }
// else if (1000 >= user){
//     document.write ("Its 10 am")
// }
// else if (1100 >= user){
//     document.write ("Its 11 am")
// }
// else if (1200 >= user){
//     document.write ("Its 12 am")
// }
// else if (1300 >= user){
//     document.write ("Its 1 pm")
// }
// else if (1400 >= user){
//     document.write ("Its 2 pm")
// }
// else if (1500 >= user){
//     document.write ("Its 3 pm")
// }
// else if (1600 >= user){
//     document.write ("Its 4 pm")
// }
// else if (1700 >= user){
//     document.write ("Its 5 pm")
// }
// else if (1800 >= user){
//     document.write ("Its 6 pm")
// }
// else if (1900 >= user){
//     document.write ("Its 7 pm")
// }
// else if (2000 >= user){
//     document.write ("Its 8 pm")
// }
// else if (2100 >= user){
//     document.write ("Its 9 pm")
// }
// else if (2200 >= user){
//     document.write ("Its 10 pm")
// }
// else if (2300 >= user){
//     document.write ("Its 11 pm")
// }
// else if (2400 >= user){
//     document.write ("Its 12 pm")
// }


// ======================================================================================