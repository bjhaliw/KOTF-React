class Monster {
  constructor(typeMonster, health, attack, experience, loot) {
    this.typeMonster = typeMonster;
    this.health = health;
    this.attack = attack;
    this.experience = experience;
    this.loot = loot;
  }
}

export { Monster as default };
