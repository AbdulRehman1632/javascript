// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// let city=prompt (
//     "enter your city name"
// )

// if (city.toLowerCase()==="karachi"){
//     document.write("Welcome to city of lights!!")
// }
// else {document.write("welcome!!")}


// ============================================================



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt (
//     "your gender"
// )
// if (gender.toLowerCase()==="male"){
//     document.write ("Good Morning Sir!")
// }
// else {document.write ("Good Morning mam!")}

// ============================================================




// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let color = prompt (
//     "Enter traffic signals colors \n (RED, YELLOW ,GREEN)"
// )

// if (color.toLowerCase()==="red"){
//     document.write ("Must Stop")

// }
// else if (color.toLowerCase()==="yellow"){
//     document.write ("Ready to move")
// }
// else if (color.toLowerCase()==="green"){
//     document.write ("Move now")
// }
// else {document.write ("Please enter red,yellow and green color!")}

// ============================================================


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


// let fuel = +prompt (
//     "Enter remaining fuel in car"
// )
// if (fuel<"0.25"){

//     document.write("Please refill the fuel in your car")

// }
// else {document.write ("LETS GO!!")}

// ============================================================


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); !true
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); !false
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true"); !false
// }

// if (c === 13){
// alert("condition 2 is true"); !true
// }
// if (++c < 14){
// alert("condition 3 is true"); !false
// } 
// if(c === 14){
// alert("condition 4 is true");
// } !true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); !equall
// }

// if (true){
// alert("True"); unseachrable
// }
// if (false){
// alert("False"); unseachrable
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");  unseachrable
//     }


// ============================================================

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// let sub1 =+prompt(
//     "Enter your marks in Subject 1"
// );

// let sub2 =+prompt(
//     "Enter your marks in Subject 2"
// );

// let sub3 =+prompt(
//     "Enter your marks in Subject 3"
// );

// let obtained_marks = sub1 + sub2 +sub3;

// let total_marks = 100*3;

// let percentage = (obtained_marks*100)/total_marks;

// document.write ("<h1>MARKS SHEET</h1>")

// document.write(`The Total Marks in exams are ${total_marks} <br>`)

// document.write(`The Total Marks you got is ${obtained_marks}<br>`)

// document.write(`The Percentage you got is ${percentage.toFixed(2)} % <br>`)

// if (percentage>=80) {
//     document.write ("Grade: A-one" + "<br>" + "Remarks :Excellent" )
// }
// else if (percentage>=70) {
//     document.write ("Grade: A" + "<br>" + "Remarks :Good" )
// }
// else if (percentage>=60) {
//     document.write ("Grade: B" + "<br>" + "Remarks :You need to improve" )
// }
// else if (percentage<60) {
//     document.write ("Grade: Fail" + "<br>" + "Remarks :SORRY!!!" )
// }


// ============================================================



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secret_number=Math.floor(Math.random() * 11);

// let guess =+prompt ("Enter Your guess number")

// document.write ("Guess the Number between 1 yo 10 <br>");

// number_of_attempts =0;

// if (guess===secret_number){
//     document.write ("Bingo!Correct answer ")
// }
// else {
//     document.write(`TRY AGAIN!! <br> The secret number was ${secret_number} `)
// }
    


// ============================================================




// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


// let odds = +prompt ("Enter a number : ");

// if (odds % 3 === 0) {
//     document.write (`The number ${odds} is exactly divisible by 3`)
// }
// else {
//     document.write(`The number ${odds} is NOT exactly divisible by 3`)
// }


// ============================================================



// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// let number = +prompt (
//     "Enter number to find its even or odd?"
// );

// if (number % 2 === 0){
//     document.write (`${number} is an even number`)
// }
// else {
//     document.write (`${number} is an odd number`)
// }


// ============================================================



// 10. Write a program that takes temperature as input and
// shows a message based on following criteria

// let temperature = +prompt (
//     "Enter temperature"
// )

// if (temperature>40){
//     document.write("“It is too hot outside.”")
// }

// else if (temperature>30){
//     document.write("“The Weather today is Normal.”")
// }

// else if (temperature>20){
//     document.write("“Today’s Weather is cool.”")
// }

// else if (temperature>10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }


// ============================================================



// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// let first_number = +prompt (
//     "Enter your first number : "
// )

// let Operation = prompt (
// "Enter the following operator ( + , - ,* , / , % : )"
// )

// let second_number = +prompt (
//     "Enter your second number : "
//     )
    

// if (Operation === "+"){
//     document.write(`The addition of two number is ${first_number + second_number}`)
// }
// else if (Operation === "-"){
//     document.write(`The Subtraction of two number is ${first_number - second_number}`)
// }

// else if (Operation === "*"){
//     document.write(`The Multiplication of two number is ${first_number * second_number}`)
// }

// else if (Operation === "/"){
//     if (second_number === 0){
//         document.write ("zero can't be divided by any number")
//     }else {
//         document.write(`The division of two number is ${first_number / second_number}`)
//     }
// }
// else if (Operation === "%"){
//     document.write(`The Modulus of two number is ${first_number % second_number}`)
// }



// ============================================================
