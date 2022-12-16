//? VIDEO_5 - STRINGS, PROPERTIES, METHOS AND TEMPLATE LITERALS IN JAVASCRIPT
console.log(`Tutorial-5`);

const myName = `DJ`;
const thisGreating = `Good Morning`;
console.log(thisGreating + ` ` + myName);

let html = '<h1> This is My Heading </h1>' + '<p> paragraph </p>';

html = html.concat(`this`, ' ', `is my concat`);
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[3]);
console.log(html.indexOf('My'));
console.log(html.lastIndexOf('a'));
console.log(html.charAt('1'));
console.log(html.endsWith('cat'));
console.log(html.includes('concat'));
//!slice and substring are identical the only difference is if substring(-4) it will give whole string but if slice(-4)it will give last 4 characters of string
console.log(html.substring(1, 8));
//* console.log(html.substring(-4));

console.log(html.slice(1, 8));
//* console.log(html.slice(-4));

console.log(html.split(' '));

console.log(html.replace('my', 'the'));

let tutor = `Haris khan`;
let channel = `Codewithharry: Web-development playlist`;
let myClass = `Hello I'm ${myName} 
<h1>Begginer in JavaScript</h1>
<p> I'm learning from ${tutor}, ${channel} ,</p>`;

document.body.innerHTML = myClass;
