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
