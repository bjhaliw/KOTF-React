import { Button } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import createMonster from '../Logic/RandomBattleCreation';
import CreateBattle from "../Logic/RandomBattleCreation"

function InnButtons(props) {

    const { player, setPlayer, returnToTown, setTownOpen, setSleep, setBattleOpen } = props

    useEffect(() => {
        const welcomeText = `\n\nYou walk out into the wilderness in search of an adventure.`
        document.getElementById("mainTextArea").value += welcomeText // Add the initial dialog
        document.getElementById("mainTextArea").scrollTop = document.getElementById("mainTextArea").scrollHeight // Scroll the textarea to the bottom
    }, [])

    const handleBackToTown = () => {
        document.getElementById("mainTextArea").value += "\n\nYou walk back to the middle of the town."
        document.getElementById("mainTextArea").scrollTop = document.getElementById("mainTextArea").scrollHeight // Scroll the textarea to the bottom

        returnToTown()
        setTownOpen(true)
    }

    const handleRandomBattle = () => {
        setBattleOpen(true)
        returnToTown()
        
    }

    const handleSetupCamp = () => {
        setSleep(true)
    }

    const handleQuestBattle = () => {
        


    }

    return (
        <>
            <Box display="flex" gap={5} alignItems="center" justifyContent="center" alignContent="center">
                <Button variant="contained" onClick={handleRandomBattle} color="primary">Random Battle</Button>
                <Button variant="contained" onClick={handleQuestBattle} color="primary">Quest Battle</Button>
                <Button variant="contained" onClick={handleSetupCamp}color="primary">Set up Camp</Button>
                <Button variant="contained" onClick={handleBackToTown} color="primary">Back To Town</Button>
            </Box>
        </>
    )
}

export default InnButtons;