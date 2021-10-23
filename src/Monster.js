class Monster {
    constructor(name, typeMonster, health, attack, defense, experience, loot) {
        this.name = name
        this.typeMonster = typeMonster
        this.health = health
        this.attack = attack
        this.defense = defense
        this.experience = experience
        this.loot = loot
    }
}

export {Monster as default}