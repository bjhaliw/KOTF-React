import React, { useState } from 'react'
import Header from './Header';
import PlayerInfo from './PlayerInfo';
import View from './View'
import PlayerCreator from './PlayerCreator';
import { Divider } from '@material-ui/core';


function Landing() {

    const [player, setPlayer] = useState({
        name: "",
        characterClass: "",
        strength: 10,
        dexterity: 10,
        intelligence: 10,
        charisma: 10,
        constitution: 10,
        wisdom: 10,
        money: 10,
        health: 10,
        mana: 10,
        level: 1,
        experience: 0,
        helmet: {},
        armor: {},
        amulet: {},
        ring: {}
        // helmet: { name: "Righteous Helm", skill: "Defense", value: 10 },
        // armor: { name: "Heaven's Robe", skill: "Defense", value: 100 },
        // amulet: { name: "Amulet of Smiting", skill: "Strength", value: 10 },
        // ring: { name: "Ring of Stealth", skill: "Dexterity", value: 10 }
    })

    const [charCreated, setCharCreated] = useState(false)

    const handleNameChange = event => {
        setPlayer({ ...player, [event.target.name]: event.target.value })
    }

    const handleValueChange = (name, value) => {
        setPlayer({ ...player, [name]: value })
    }

    const handleCharacterClassChange = (event, characterClass) => {
        setPlayer({ ...player, characterClass: characterClass })
    }

    const createCharacter = () => {
        console.log("In the character creator")
        if (player.name !== "" && player.characterClass !== "") {
            let res = window.confirm(`Create the character ${player.name}, the ${player.characterClass}?`)
            if (res) {
                enhanceCharacterStats(player)
                setCharCreated(true)
            }
        }
    }

    return (
        <>
            <Header />
            
            {charCreated ? (
                <>
                    <PlayerInfo player={player} />
                    <Divider />
                    <View player={player} setPlayer={setPlayer} />
                </>

            ) : <PlayerCreator
                player={player}
                setPlayer={setPlayer}
                handleNameChange={handleNameChange}
                handleValueChange={handleValueChange}
                handleCharacterClassChange={handleCharacterClassChange}
                createCharacter={createCharacter} />
            }

        </>
    )
}

function enhanceCharacterStats(player) {

    if (player.characterClass === "Warrior") {
        player.strength += 5
        player.constitution += 5
        player.mainHand = { name: "Short Sword", skill: "Attack", value: 6 }
        player.offHand = { name: "Wooden Buckler", skill: "Defense", value: 5 }
    } else if (player.characterClass === "Wizard") {
        player.intelligence += 5
        player.wisdom += 5
        player.mainHand = { name: "Staff", skill: "Attack", value: 6 }
        player.offHand = { name: "Magic Book", skill: "Defense", value: 5 }
    } else if (player.characterClass === "Rogue") {
        player.charisma += 5
        player.dexterity += 5
        player.mainHand = { name: "Bow", skill: "Attack", value: 6 }
        player.offHand = { name: "Dagger", skill: "Attack", value: 2 }
    }

    player.money *= player.charisma
    player.health *= player.constitution
    player.maxHealth = player.health
    player.mana *= player.intelligence
    player.maxMana = player.mana
}

export default Landing;