import React, { useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'
import Box from "@mui/material/Box"

function PlayerCreator(props) {

    const comboChoices = ["Warrior", "Rogue", "Wizard"]
    const [remainingPoints, setRemainingPoints] = useState(10)

    /**
     * Handles the character stat changes (strength, dexterity, etc.)
     * @param {*} event 
     */
    const handleValueChange = event => {
        let tempPlayer = props.player;

        if (tempPlayer[event.target.name] < Number(event.target.value)) {
            if (remainingPoints !== 0) {
                setRemainingPoints(remainingPoints - 1)
            } else if (remainingPoints === 0) {
                document.getElementById(event.target.name).value = document.getElementById(event.target.name).value - 1
            }
        } else {
            setRemainingPoints(remainingPoints + 1)
        }

        if (remainingPoints !== 0) {
            props.handleValueChange(event.target.name, Number(event.target.value))
        }
    }

    return (
        <>

            <Box display="grid" justifyContent="center" alignItems="flex-start" gap={5} padding={2}>

                <Typography component="center" variant="h4">Character Creation</Typography>

                <Box display="flex" alignItems="flex-end" justifyContent="center" gap={5}>
                    <TextField id="name" name="name" label="Player Name" onChange={props.handleNameChange} />

                    <Autocomplete
                        disablePortal
                        name="characterClass"
                        id="characterClass"
                        options={comboChoices}
                        sx={{ width: 200 }}
                        onChange={props.handleCharacterClassChange}
                        renderInput={(params) => <TextField {...params} label="Character Class" />}
                    />
                </Box>

                <Box display="flex" gap={5}>
                    <TextField
                        id="strength"
                        name="strength"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()}
                        label="Strength" />

                    <TextField
                        id="dexterity"
                        name="dexterity"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()} label="Dexterity" />

                    <TextField
                        id="intelligence"
                        name="intelligence"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()} label="Intelligence" />

                </Box>

                <Box display="flex" gap={5}>
                    <TextField
                        id="charisma"
                        name="charisma"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()} label="Charisma" />
                    <TextField
                        id="constitution"
                        name="constitution"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()}
                        label="Constitution" />

                    <TextField
                        id="wisdom"
                        name="wisdom"
                        type="number"
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        onChange={handleValueChange}
                        defaultValue={10}
                        onKeyDown={e => e.preventDefault()}
                        label="Wisdom" />

                </Box>

                <Box display="flex" gap={5} justifyContent="center">
                    <TextField
                        id="remainingPoints"
                        name="remainingPoints"
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                        value={remainingPoints}
                        onKeyDown={e => e.preventDefault()}
                        label="Remaining Points" />


                </Box>
                <Box display="flex" gap={5} justifyContent="center">
                    <Button name="createCharacter" id="createCharacter" variant="contained" color="secondary" onClick={props.createCharacter}>Create Character</Button>
                </Box>

            </Box>



        </>
    )
}

export default PlayerCreator