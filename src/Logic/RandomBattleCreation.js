import Monster from "./Monster";

export default function createMonster(player) {

    const type = pickMonsterType()
    
    // Find Health of monster by taking +/- 20% of player max health
    const healthMin = Math.ceil(player.maxHealth - (player.maxHealth * 0.2))
    const healthMax = Math.floor(player.maxHealth + (player.maxHealth * 0.2))
    const health = Math.floor(Math.random() * (healthMax - healthMin) + healthMin);

    // Get the attack
    const attackMin = Math.ceil(player.attack - (player.attack * 0.1))
    const attackMax = Math.floor(player.attack + (player.attack * 0.1))
    const attack = Math.floor(Math.random() * (attackMax - attackMin) + attackMin)

    // Get the experience
    const minExperience = Math.ceil(player.level)

    // Get the loot
    const lootMin = Math.ceil((player.level + 3 * 2)^2 * 10)
    const lootMax = Math.ceil((player.level + 3 * 5)^2 * 10)
    const loot = Math.floor(Math.random() * (lootMax - lootMin) + lootMin)


    return new Monster(type, health, attack, 13 ,loot)
}

function pickMonsterType() {
    const rand = Math.floor(Math.random() * 100)

    switch (true) {
        case (rand <= 25): return "Werewolf";
        case (rand <= 50): return "Goblin";
        case (rand <= 75): return "Slime";
        case (rand <= 100): return "Dragon";
    }

}