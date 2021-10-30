import { Button } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import createMonster from '../Logic/RandomBattleCreation';
import CreateBattle from "../Logic/RandomBattleCreation"

function BattleButtons(props) {

    const { player, setPlayer, monster, setMonster, returnToOutside, leaveBattle } = props

    useEffect(() => {
        const monster = createMonster(player)
        const welcomeText = `\n\nHo, mukatta kurono ka? Nigetsu ni kono DIO ni chikazuite kuruno da? Sekkaku sofu no Josephu ga watashi no za warudo no shotai wo. Shiken shuryu chaimu chokuzen made mondai yo toitte iru jukensee ne you na? Kisshi koita kibun de wo shietekure ta to yuu no ni?`
        document.getElementById("mainTextArea").value += welcomeText // Add the initial dialog
        document.getElementById("mainTextArea").scrollTop = document.getElementById("mainTextArea").scrollHeight // Scroll the textarea to the bottom
    }, [])

    const handleRunAway = () => {
        document.getElementById("mainTextArea").value += "\n\nYou run like the coward that you are."
        document.getElementById("mainTextArea").scrollTop = document.getElementById("mainTextArea").scrollHeight // Scroll the textarea to the bottom

        leaveBattle()
        returnToOutside()
    }

    const handleAttack = () => {
        
    }

    const handleItem = () => {

    }

    const handleMagic = () => {

    }


    return (
        <>
            <Box display="flex" gap={5} alignItems="center" justifyContent="center" alignContent="center">
                <Button variant="contained" onClick={handleAttack} color="primary">Attack</Button>
                <Button variant="contained" onClick={handleMagic} color="primary">Magic</Button>
                <Button variant="contained" onClick={handleItem} color="primary">Use Item</Button>
                <Button variant="contained" onClick={handleRunAway} color="primary">Run Away</Button>
            </Box>
        </>
    )
}

export default BattleButtons;