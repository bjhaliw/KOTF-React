import React, { useEffect, useState } from 'react'
import { Typography, Grid, TextField, Button } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'

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
            <Grid container direction="row" spacing={5} >
                <Grid container item spacing={3} justifyContent="center" alignItems="center">

                    <Grid item>
                        <TextField id="name" name="name" label="Player Name" onChange={props.handleNameChange} />
                    </Grid>

                    <Grid item>
                        <Autocomplete
                            disablePortal
                            name="characterClass"
                            id="characterClass"
                            options={comboChoices}
                            sx={{ width: 200 }}
                            onChange={props.handleCharacterClassChange}
                            renderInput={(params) => <TextField {...params} label="Character Class" />}
                        />
                    </Grid>
                </Grid>

                <Grid container item spacing={3} justifyContent="center" alignItems="center">

                    <Grid item>
                        <TextField
                            id="strength"
                            name="strength"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()}
                            label="Strength" />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="dexterity"
                            name="dexterity"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()} label="Dexterity" />
                    </Grid>


                    <Grid item>
                        <TextField
                            id="intelligence"
                            name="intelligence"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()} label="Intelligence" />
                    </Grid>

                </Grid>

                <Grid item container spacing={3} justifyContent="center" alignItems="center">

                    <Grid item>
                        <TextField
                            id="charisma"
                            name="charisma"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()} label="Charisma" />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="constitution"
                            name="constitution"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()}
                            label="Constitution" />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="wisdom"
                            name="wisdom"
                            type="number"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            onChange={handleValueChange}
                            defaultValue={10}
                            onKeyDown={e => e.preventDefault()}
                            label="Wisdom" />
                    </Grid>
                </Grid>

                <Grid item container direction="column" justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <TextField
                            id="remainingPoints"
                            name="remainingPoints"
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            value={remainingPoints}
                            onKeyDown={e => e.preventDefault()}
                            label="Remaining Points" />
                    </Grid>


                    <Grid item>
                        <Button name="createCharacter" id="createCharacter" variant="contained" color="secondary" onClick={props.createCharacter}>Create Character</Button>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )
}

export default PlayerCreator