// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let arr= [];

// =======================================================================

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let Studentnameobject = new Array ();

// =======================================================================

//3. Declare and initialize a strings array.

// let arr = ["AbdulRehman" , "Anas" , "Obad" , "Bhatti"]

// =======================================================================

// 4. Declare and initialize a numbers array.

// let number= [22 , 33, 44 , 90 ,45]

// =======================================================================

// 5. Declare and initialize a boolean array.

// let boolean_array = [true,false,true,false]

// =======================================================================

// 6. Declare and initialize a mixed array.

// let mixed = ["Aman" , "45" ,true,undefined]

// =======================================================================

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let arr= ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"]
// let length = 8;

// for (let i=0; i < arr.length; i++ )

// {

// document.write (`${i} ${arr[i]}  <br> `)

// }


// =======================================================================

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// let studentname = ['anas' , 'obad' , 'bhatti']

// let score =[ 250 , 300 , 450]

// percentage1 = (score[0] * 100)/500;
// percentage2 = (score[1] * 100)/500;
// percentage3 = (score[2] * 100)/500;

// let percentage_array = [percentage1,percentage2,percentage3]

// for (let i=0 ; i<studentname.length ; i++){
//     document.write (
//         `Score of ${studentname[i]} is ${score[i]}.Percentage ${percentage_array[i]} % <br>`
//     )
// }

// =======================================================================

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// let add_color = prompt ("Enter a color name to add!")

// color.unshift (add_color)

// document.write (color)

// =======================================================================

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// let add_color = prompt ("Enter a color name to add!")

// color.push(add_color)

// document.write(color)

// =======================================================================

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// color.splice (0 , 0 ,"white" ,"purple")

// document.write (color)

// =======================================================================

// d. Delete the first color in the array. Display the updated
// array in your browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// color.shift ();

// document.write(color)

// =======================================================================

// e. Delete the last color in the array. Display the updated
// array in your browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// color.pop ();

// document.write (color)

// =======================================================================

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// let color_index = +prompt ("enter the index number for add a color")
// let color_name = prompt ("enter the name of the color")

// color.splice (color_index , 0 ,color_name)

// document.write (color)

// =======================================================================

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let color = ['red' , 'yellow' , 'green' ,'aqua', 'black']

// let color_index = +prompt ("enter the index number to remove a color")

// let color_name = prompt ("how many colorss you want to remove?")

// color.splice (color_index ,color_name)

// document.write (color)

// =======================================================================

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let scores_of_students= [320 ,230 ,480 , 120]

// scores_of_students.sort()

// document.write(scores_of_students)

// =======================================================================

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cities= ['Karachi','Lahore','Islamabad','Quetta','Peshawar']

// let arr = cities.slice(2,4)

// document.write (arr)

// =======================================================================

// 12. Write a program to create a single string from the
// below mentioned array:

// var arr = [' This ', ' is ', 'my ' , ' cat'];

// for (i=0; i<arr.length ; i++){
//     document.write (arr[i])
// }

// =======================================================================

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = ['Keyboard' , 'mouse','printer','monitor']

// for (i=0 ; i<devices.length ;i++){
//     document.write (`Out: ${devices[i]} <br>`)
// }


// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


// let devices = ['Keyboard' , 'mouse','printer','monitor']

// for (i=devices.length-1 ;i >=0 ;i--){
//     document.write (`Out: ${devices[i]} <br>`)
// }

// =======================================================================

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


// let phones = ['Apple ','Samsung ', 'Motorola ', 'Nokia ', 'Sony ' , 'Haier ']

// for (i = 0 ; i < phones.length ; i++ ){
//     document.write (`${phones[i]} <br>`)
// }

// =======================================================================
