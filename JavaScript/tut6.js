//? VIDEO_6 - ARRAYS AND OBJECTS IN JAVASCRIPT
console.log(`Tutorial-6`);
//! ARRAYS methods and properties

let marks = [54, 67, 23, 54, 98, 65];
// console.log(marks);
let valueMarks = marks.indexOf(98);
// console.log(valueMarks);

const fruits = [`apple, mango, banana, peru, grapes`];
// console.log(fruits);
const mixedArray = [`rahul`, 54, true, `54`, [1, 2, 3, 5]];
// console.log(mixedArray);

//!ARRAY CONSTRUCTOR
const arr = new Array(`ball`, `pencil`, 34, 23, `duck`);
// console.log(arr[0]);

// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[`0`] = `juveria`;
// console.log(arr);

let arrElement = arr[4];
// console.log('element :', arrElement);

//* MUTATING OR MODIFYING ARRAYS
//! Below Methods changes original arrays
// marks.push(2000);

// marks.unshift(10001);

// marks.pop();

// marks.shift();

// marks.splice(1, 2);

// marks.reverse();

// let marks2 = [1, 2, 3, 4];
// marks = marks.concat(marks2);
// console.log(marks);


//! OBJECT'S methods and properties

let myObj = {
   'Full Name':`Juveria Dalvi`,
    Course: `JavaScript`,
    Tutor: `Haris Khan`,
    'My progress': true,
    languages:[`JavaScript`,`PHP`, `HTML & CSS`, 28]
}
console.log(myObj);
console.log(myObj["Full Name"]);
console.log(myObj.Tutor);

