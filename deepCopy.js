// Deep Copy
// A deep copy creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes  
// made to one object do not affect the other, as each object, along with its nested structures, resides in a separate memory location. 
const obj1 = {a:1,b:2,c: ['a',',b','c']};
const obj2 = JSON.stringify(obj1);
// now if we can change anhthing in obj2 will not  
//  affect the obj1
