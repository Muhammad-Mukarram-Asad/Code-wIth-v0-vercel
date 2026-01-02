// we have global object in node.js like we have window object in browser. It resembleswith window object little bit.

console.log(__dirname); // returns the actual directory.
console.log(__filename); // returns the full path of the current file.

console.log("Hello World!"); 
// We can also write the above statement as follows:
global.console.log("Hello World!");
