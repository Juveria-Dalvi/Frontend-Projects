//?VIDEO_3 - DATA TYPES IN JAVASCRIPT(Primitive & Reference Types)
var tut3 = `Tutorial-3`;
console.log(`This is ` + tut3);

//!Primitive Data Types -   1.String , 2.Number, 3.Boolean, 4.Null, 5.Undefined, 6.Symbol.

//*String with 'typeof' operator
let isMyname = `DJ`;
console.log(`My Data Type is ` + typeof isMyname);

//*Number with 'typeof' operator
let myAge = 21.9;
console.log(`My Data Type is ` + typeof myAge);

//*Boolean with 'typeof' operator
let isFemale = true;
console.log(`My Data Type is ` + typeof isFemale);

//*Null with 'typeof' operator , null has (bogus/imposter) value
let myNull = null;
console.log(`My Data Type is ` + typeof myNull);

//*Undefined with 'typeof' operator
let undef = undefined;
console.log(`My Data Type is ` + typeof undef);

//!Reference Data Types -   1.Arrays, 2.Object-literals, 3.Functions, 4.Dates.

//*Array
let myArr1 = [23, 34, 76, `DJ`, 'FEM', 'mixedarray', true];
console.log(`My Data Type is ` + typeof myArr1);

//*Object-literals
let myMarks = {
	Juveria: 54,
	Harry: 87,
	Matt: 90
};
console.log(myMarks);
console.log(`My Data Type is ` + typeof myMarks);

//*Functions
function findName() {}
console.log(`My Data Type is ` + typeof findName);

//*Date
let date = new Date();
console.log(`My Data Type is ` + typeof date);
