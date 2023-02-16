// let input = prompt("What would you like to do?");

// // List app
// const todos = ['Study', 'Blog'];
// if (input == 'list') {
//     console.log("#############")
// }

// // Quit app
// while (input !== 'quit') {
//     input = prompt("What would you like to do?");
// }
// console.log("You Quit")

let input = prompt("What would you like to do?");
const todos = ['Study', 'Blog'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log("#############");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("#############");
    } else if (input === 'new') {
        const newTodo = prompt('OK, What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = prompt("OK, enter index to delete: ");
        const deleted = todos.splice(parseInt(index), 1)
        console.log(index)
        console.log(`Ok, deleted ${deleted[0]}`)
    } else (`Unknown index`)


    input = prompt("What would you like to do?");
}
console.log("You Quit")



