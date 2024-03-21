// Chapter 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


// let a = +prompt ("enter a number")

// document.write(`the value of a is ${a} <br>` )
// document.write("the value of ++a is = " + ++a + "<br>")
// document.write("the value of a++ is = " + a++ + "<br>")
// document.write("the value of --a is = " + --a + "<br>")
// document.write("the value of a-- is = " + a-- + "<br>")

// ==============================================================


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

// var a = "2";
// var b = "1";

// document.write(`the value of a is ${a} <br>` )
// document.write(`the value of b is ${b} <br>` )

// var mi_a = --a;
// var mi_b = --b;

// document.write(`the value of minus-a is ${mi_a} <br>` )
// document.write(`the value of minus-b is ${mi_b} <br>` )

// var pp_b = ++b

// document.write(`the value of plus-plus-b is ${pp_b} <br>` )

// var b_mi_mi = b--

// document.write(`the value of b-minus-minus is ${b_mi_mi} <br>` )

// document.write (`the value of sum is ${mi_a - mi_b + pp_b + b_mi_mi} <br>`)


// ==============================================================





// 3. Write a program that takes input a name from user &
// greet the user.

// let user = prompt("Enter Your Name")

// document.write (`Welcome! ${user}`)


// ==============================================================




// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// let table = +prompt ("Enter a number to find out its TABLE")

// document.write(`The Multiplication Table Of ${table} Is <br>`)

// document.write (`${table} * 1 = ${table} <br>`)
// document.write (`${table} * 2 = ${table*2} <br>`)
// document.write (`${table} * 3 = ${table*3} <br>`)
// document.write (`${table} * 4 = ${table*4} <br>`)
// document.write (`${table} * 5 = ${table*5} <br>`)
// document.write (`${table} * 6 = ${table*6} <br>`)
// document.write (`${table} * 7 = ${table*7} <br>`)
// document.write (`${table} * 8 = ${table*8} <br>`)
// document.write (`${table} * 9 = ${table*9} <br>`)
// document.write (`${table} * 10 = ${table*10} <br>`)

// ==============================================================




// marksheet

// let subject1 = prompt ("Enter name of Subject 1")
// let subject2 = prompt ("Enter name of Subject 2")
// let subject3 = prompt ("Enter name of Subject 3")

// let obtained_marks1 = +prompt ("Enter name of Obtained Marks 1")
// let obtained_marks2 = +prompt ("Enter name of Obtained Marks 2")
// let obtained_marks3 = +prompt ("Enter name of Obtained Marks 3")

// let Total_marks = 100;

// let percentage1 = (obtained_marks1*100) / Total_marks ;
// let percentage2 = (obtained_marks2*100) / Total_marks ;
// let percentage3 = (obtained_marks3*100) / Total_marks ;

// let total_marks_of_all_subject = Total_marks*3;
// let Total_obtained_marks = obtained_marks1 + obtained_marks2 + obtained_marks3;
// let percentage = (Total_obtained_marks*100) / total_marks_of_all_subject ;



// document.write ("<h1>Result</h1>")

// document.write ("<table style='border-collapse:collapse;'>")

// document.write ("<tr><th style='border 10px solid black;'>Subject </th><th style='border 10px solid black;'> Total Marks</th><th style='border 10px solid black;'> Obtained Marks</th><th style='border 10px solid black;'> Percentage</th></tr> <br>")

// document.write (`<tr><td style='border 10px solid black;'> ${subject1} <td style='border 10px solid black;'>${Total_marks} <td style='border 10px solid black;'>${obtained_marks1} <td style='border 10px solid black;'>${percentage1} % </tr>`)

// document.write (`<tr><td style='border 10px solid black;'> ${subject2} <td style='border 10px solid black;'>${Total_marks} <td style='border 10px solid black;'>${obtained_marks2} <td style='border 10px solid black;'>${percentage2} % </tr>`)

// document.write (`<tr><td style='border 10px solid black;'> ${subject3} <td style='border 10px solid black;'>${Total_marks} <td style='border 10px solid black;'>${obtained_marks3} <td style='border 10px solid black;'>${percentage3} % </tr>`)


// document.write (`<tr><th style='border 10px solid black;'>Your Aggregate Percentage Is ${percentage} % </tr>`)

// ==============================================================
