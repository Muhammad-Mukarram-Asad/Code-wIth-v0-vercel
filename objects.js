// JavaScript Objects Practice:

let spellBok = {
  listOfSpells: [],
  findSpell: function (spellName){
    let findSpell = this.listOfSpells.find((element) => element.spell === spellName);
    if(findSpell)
    {
      console.log(` Spell: ${findSpell.spell} ! , Power: ${findSpell.power}`);
    }
    else
    {
      console.log(` Spell: ${spellName} not found in books cabinet`);
    }
  },

  addSpell: function (spellName, powerLevel){
    this.listOfSpells.push({`spell: ${spellName}, power: ${powerLevel}`});
},
listSpells: function () 
  {
    this.listOfSpells.forEach((ele) => {
      console.log({`spell: ${ele.spell}, power: ${ele.power}`})
  }
}

let book1 = new spellBook();
book1.addSpell("JavaScript",200);

let book2 = new spellBook();
book2.addSpell("Python", 150);
let book3 = new spellBook();
book3.addSpell("Java", 100);

book1.findSpell("Go"); // expected result: not found.

// JS Objects Important Thing related to how they sstore the data:

/*
In JavaScript, objects (including arrays and functions, which are specialized types of objects) are stored and manipulated by reference,  
not by value. This means that when you assign an object to a variable, or pass an object as an argument to a function, you are actually  
working with a reference to the object in memory, not a copy of the object itself.
*/
// For Example:  
let obj1 = { a: 1 };
let obj2 = obj1; // obj2 now holds a reference to the same object as obj1

obj2.a = 2; // Modifying obj2 also modifies the object referred to by obj1

console.log(obj1.a); // Output: 2



