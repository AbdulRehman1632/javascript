// 1,2. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let a = +prompt ("enter your first number");
// let b = +prompt ("enter your second number");

// let sum = a + b;

// document.write("Addition of numbers  =  " , sum , "<br/>")

// 2.SUBTRACTION

// let a = +prompt ("enter your first number");
// let b = +prompt ("enter your second number");

// let sub = a - b;

// document.write("Subtraction of numbers  =  " , sub , "<br/>")


// 3. MULTIPLICATION

//  let a = +prompt ("enter your first number");
//  let b = +prompt ("enter your second number");

//  let mul = a * b;

//  document.write("Multiplication of numbers  =  " , mul , "<br/>")


// 4.Divison

//  let a = +prompt ("enter your first number");
//  let b = +prompt ("enter your second number");

//  let div = a / b;

//  document.write("Division of numbers  =  " , div , "<br/>")

// =====================================






// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
// let name1;


// b. Show the value of variable in your browser like “Value
// after variable declaration is: undefined”.

// document.write(name1)

// c. Initialize the variable with some number.

// name1=5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.

// document.write (name1)


// e. Increment the variable.

// document.write(++name1)

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

// let name1 = 5;

// document.write(++name1)


// g. Add 7 to the variable.

// name1 +=7


// h. Show the value of variable in your browser like “Value after addition is: 13”.

// document.write(name1)

// i. Decrement the variable.

// document.write(name1++)


// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

// name1 = 5;

// document.write(name1++)


// k. Show the remainder after dividing the variable’s value
// by 3.

// document.write(name1++ / 3)

// l. Output : “The remainder is : 0”.

// =======================================







// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.


// let movie_tickets= +prompt ("Enter Number of Tickets \n Each Ticket price=600");
// let tickets_price ="600";
// let total_price= movie_tickets * tickets_price ;

// document.write(total_price)

// =======================================






// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// let table = +prompt ("Enter Your Number");

// document.write ("Table of  "+   table + "<br>");

// document.write( table + "*" + 1 + "=" + table * 1 + "<br>")
// document.write( table + "*" + 2 + "=" + table * 2 + "<br>")
// document.write( table + "*" + 3 + "=" + table * 3 + "<br>")
// document.write( table + "*" + 4 + "=" + table * 4 + "<br>")
// document.write( table + "*" + 5 + "=" + table * 5 + "<br>")
// document.write( table + "*" + 6 + "=" + table * 6 + "<br>")
// document.write( table + "*" + 7 + "=" + table * 7 + "<br>")
// document.write( table + "*" + 8 + "=" + table * 8 + "<br>")
// document.write( table + "*" + 9 + "=" + table * 9 + "<br>")
// document.write( table + "*" + 10 + "=" + table * 10 + "<br>")


// =======================================






// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

// CELCIUS TO FAHRENHEIT

// let temp = +prompt ("Enter a Temperature");

// let celcius_to_fahrenheit = ( (temp * 9/5) +32 );


// document.write ( temp + "<sup>0</sup>"  + "C"  + "   is"   +   celcius_to_fahrenheit  + "<sup>0</sup>"  + "F" );

// FAHRENHEIT TO CELCIUS

// let temp = +prompt ("Enter a Temperature");

// let fahrenheit_to_celcius = ( (temp - 32) * 5/9 ); 

// document.write ( temp + "<sup>0</sup>"  + "C"  + "   is"   +   fahrenheit_to_celcius   +  "<sup>0</sup>"  + "F"  );


// =======================================






// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables


// let price_of_item_1 = 650;
// let quantity_of_item_1 = +prompt ("Enter Quantity Of Item 1 \n Price of item 1 is 650 Each")
// let price_of_item_2 = 100;
// let quantity_of_item_2 = +prompt ("Enter Quantity Of Item 2 \n Price of item 2 is 650 Each")
// let shipping_charges = 100;

// let total_price = (price_of_item_1 * quantity_of_item_1 + price_of_item_2 * quantity_of_item_2 + shipping_charges )


// document.write("SHOPPING CART" + "<br>")

// document.write ("The Price Of Item 1 Is  " +  price_of_item_1 + "<br>")

// document.write ("The Quantity Of Item 1 Is  " + quantity_of_item_1 + "<br>")

// document.write ("The Price Of Item 2 Is  " +  price_of_item_2 + "<br>")

// document.write ("The Quantity Of Item 2 Is  " + quantity_of_item_2 + "<br>")

// document.write ("Shipping Charges Is " +  shipping_charges + "<br>" )

// document.write ("Total Cost Of Your Order Is "   + total_price )


// =======================================





// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// let Total_Marks = +prompt ("Enter Your Total Marks")
// let Obtained_Marks = +prompt ("Enter Your Obtained_Marks")

// let percentage = (Obtained_Marks / Total_Marks * 100)

// document.write("Marks Sheet" + "<br>" )

// document.write ("Total Marks: " + Total_Marks + "<br>"  )

// document.write ("Obtained Marks: " + Obtained_Marks + "<br>" )

// document.write ("Percentage: " + percentage + "<br>" )


// =======================================





// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// let pkr_dollar = +prompt ("Enter how much dollar will you exchange?")
// let pkr_riyal = +prompt ("Enter how much riyal will you exchange?")

// let dollar_to_pkr =( pkr_dollar * 104.80 )
// let riyal_to_pkr = (pkr_riyal * 28 )

// let total_price = (dollar_to_pkr+riyal_to_pkr)

// document.write ("The Total Currency In Pkr : " + total_price )


// =======================================





// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// let a = +prompt ("Enter Number");

// let total = ((a + 5) * 10) / 2 ;

// document.write (total);


// =======================================





// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.


// let born_year = +prompt ("Enter Your Birth Year")
// let current_year = +prompt ("Enter Current Year")
// let age = (current_year - born_year)

// document.write( "AGE CALCULATOR" + "<br>" )
// document.write("Current year : " + current_year + "<br>" )
// document.write("Birth year : " +  born_year  + "<br>" )
// document.write ("Your Age Is : " + age )


// =======================================





// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// let radius = +prompt ("Enter Radius");

// const pie = 3.142;

// let circumference = ( 2 * pie * radius)

// let area = (pie * radius * radius)

// document.write ("The Geometrizer" + "<br>")
// document.write("The Radius Of Circle is : " + radius  + "<br>" )
// document.write("The Circumference is : " + circumference  + "<br>" )
// document.write("The area is : " + area  + "<br>" )


// =======================================



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?


// let favourite_snack = ("Enter Your Favourite Snack");
// let my_age = 21;
// let max_age =50;
// let estimated_amount = 3;

// let remaining_age = 45-22;
// let total_snacks = remaining_age * 365 * estimated_amount;

// document.write ("YOU WILL NEED  " + total_snacks + "  SNACKS TILL THE OLD AGE OF 45") 


// =======================================
