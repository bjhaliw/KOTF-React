import Item from "./Item";

class Player {
  constructor(
    name,
    playerClass,
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom
  ) {
    this.name = name;
    this.playerClass = playerClass;

    this.charisma = charisma;
    this.constitution = constitution;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.strength = strength;
    this.wisdom = wisdom;

    this.level = 1;
    this.experience = 0;

    if (playerClass === "Warrior") {
      this.strength += 10;
      this.constitution += 10;
      this.mainHand = new Item("Steel Short Sword", 5, { attack: 10 });
      this.offHand = new Item("Wooden Buckler", 3, { defense: 5 });
    } else if (playerClass === "Rouge") {
      this.dexterity += 10;
      this.charisma += 10;
      this.mainHand = new Item("Sharp Dagger", 5, { attack: 6 });
      this.offHand = new Item("Wooden Buckler", 3, { defense: 5 });
    } else if (playerClass === "Wizard") {
      this.intelligence += 10;
      this.wisdom += 10;
      this.mainHand = new Item("Wand", 5, { attack: 8 });
      this.offHand = new Item("Magic Book", 3, { defense: 2 });
    }

    this.mana = this.intelligence * 5;
    this.health = this.constitution * 10;
    this.money = this.charisma * 100;
    this.isPlayerDead = false;
    this.numSkillPoints = 30;
  }
}

export { Player as default };
