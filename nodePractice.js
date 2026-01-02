// we have global object in node.js like we have window object in browser. It resembleswith window object little bit.

console.log(__dirname); // returns the actual directory.
console.log(__filename); // returns the full path of the current file.

console.log("Hello World!"); 
// We can also write the above statement as follows:
global.console.log("Hello World!");

// In order to extract the file name only from __filename, we have to import path module which is not globally availabel in node but it is the part of node.js

const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);

// For checking the methods that are available in node,we can us ea for loop:

for(let key in global)
{
  console.log(key);
}

// another thing in node.js is process.argv:

// The process object in Node.js is a global object that provides information and control over the current Node.js process. 
// It can be accessed from anywhere in your application and includes functionalities such as reading environment variables, interacting with the terminal, and exiting the current process.
// For example, process.argv is an array that contains command-line arguments passed when the Node.js process was launched. 
//  This allows you to create command-line applications by processing user input directly from the terminal.
// Like in the file we write ==> console.log(process.argv);
// it returns the previous terminal outputs in the form of array
node global => it return where node is running currently and the current file path
node global --user "mukii" --greeting "hello"

// Standard Input and Output in node.js:
process.stdout.write("Welcome");

const questions = [
    "What is your name?",
    "What is your favorite color?",
    "What is your favorite food?"
]

const answers = [];

function ask(i = 0)
{
    process.stdout.write('\n' + questions[i] + ' > ');
}

// ask(answers.length);


// wait for user input
process.stdin.on('data', function (data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        // process.stdout.write('\n\n');
        // for(const ans of answers)
        // {
        //     process.stdout.write(ans + '\n\n');
        // }
        process.exit();
    }
});

ask();

// for displaying user output after exit,
process.on('exit', () => {
    process.stdout.write('\n');
    console.log(`So your name is ${answers[0]} and your favorite color is ${answers[1]} and your favorite food is ${answers[2]}`);
})

  
