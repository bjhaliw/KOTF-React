import { Button } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    textArea: {
        minWidth: 800,
        maxWidth: 800,
        minHeight: 410,
        maxHeight: 410
    },
    grid: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: 510,
        width: 300
    },
    buttons: {
        width: 150
    }
}));

function InnButtons(props) {

    const classes = useStyles()

    const { setLeaveTown, setInnOpen, setStoreOpen, setTownOpen } = props

    const handleInnButton = () => {
        setTownOpen(false)
        setInnOpen(true)
    }

    const handleLeaveTownButton = () => {
        setTownOpen(false)
        setLeaveTown(true)
    }

    return (
        <>
            <Box display="flex" gap={10} alignContent="center" alignItems="center" justifyContent="center">
                <Button className={classes.buttons} variant="contained" color="primary" onClick={handleInnButton}>Inn</Button>
                <Button className={classes.buttons} variant="contained" color="primary" onClick={() => setStoreOpen(true)}>Store</Button>
                <Button className={classes.buttons} variant="contained" color="primary" onClick={handleLeaveTownButton}>Leave Town</Button>
            </Box>
        </>
    )
}

export default InnButtons;