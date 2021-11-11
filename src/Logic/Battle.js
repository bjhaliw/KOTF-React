export function Battle(
  player,
  monster,
  setPlayer,
  setMonster,
  playerTypeAttack
) {
  if (player.health > 0) {
    document.getElementById("mainTextArea").value += ``;
    const monsterDamage = monster.health - player.attack;
    setMonster(...monster, (monster.health = monsterDamage));
  } else {
    console.log("You're dead");
  }

  if (monster.health > 0) {
    let damage = monster.attack - player.defense;

    if (damage < 0) {
      damage = 0;
    }
  }
}

function PlayerStandardAttack(player, monster, setPlayer, setMonster) {}

function EnemyStandardAttack(player, monster, setPlayer, setMonster) {}
