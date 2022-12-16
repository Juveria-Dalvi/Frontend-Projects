//? VIDEO_2 - VARIABLES: let, const & var in JavaScript
console.log('tutorial-2');

var myName = `juveria dalvi`;
var course;
course = `Web Development`;
var age = 21;
console.log(myName, course, age);

//!RULES FOR CREATING JAVASCRIPT VARIABLES :
//* 1 - Cannot start with numbers
//* 2 - Can start with letters, underscores(_) or dollor ($)
//* 3 - Are case sensetive.

var city = `Dapoli`;
console.log(city);

const channel = `CodeWithHarry`;
// ! Cannot re-declare value in same variable
// channel=`Mosh Hamadani`
console.log(channel);

//! In const , you Cannot declare variable as undefined it gives error
// const fruits;

//! we can push/shift (insert/remove) the elements in array
const arr1 = [23, 43, 56, 80];
// arr1.push(45, `harry`);
// arr1.shift(23);
console.log(arr1);

//! let has block level scope
{
	let city = `Chiplun`;
	// city = `Kolhapur`;
	console.log(city);
}

//! MOST COMMOM PROGRAMMING CASE TYPE:
//* 1. camelCase
//* 2. kabab-case
//* 3. snake_case
//* 4. PascalCase
