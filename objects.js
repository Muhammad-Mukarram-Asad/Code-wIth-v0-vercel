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
