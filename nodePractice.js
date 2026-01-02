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
  "Whats i your name?",
  "How old are you?",
   "What is your faviourite sports?"
];

  
