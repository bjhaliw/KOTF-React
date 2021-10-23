import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import PlayerInfo from '../components/PlayerInfo'
import { DialogActions, Divider, makeStyles } from '@material-ui/core';
import { Box } from '@mui/system';
import { Grid } from '@material-ui/core';
import { DialogContent, Paper } from '@mui/material';

const useStyles = makeStyles(theme => ({
    textArea: {
        minWidth: 800,
        maxWidth: 800,
        minHeight: 610,
        maxHeight: 610
    },
    grid: {
        justifyContent: "center",
        height: 610,
        width: 300
    },
    buttons: {
        width: 150
    },
    dialog: {
        width: 800,
        height: 800
    }
}));

function InnDialog(props) {

    // Custom UI styles
    const classes = useStyles()

    // Our props
    const { onClose, player, open, setPlayer } = props;

    // Close the dialog
    const handleClose = () => {
        onClose();
    };

    // The player selects the Luxury Room
    const handleLuxuryRoom = () => {
        if (player.money >= 20) {
            const newHealth = player.maxHealth + (player.maxHealth * 0.25)
            const newMana = player.maxMana + (player.maxMana * 0.25)

            const newPlayerObject = { ...player }
            newPlayerObject.health = newHealth
            newPlayerObject.mana = newMana
            newPlayerObject.money = newPlayerObject.money - 50
            setPlayer(newPlayerObject)
            handleClose()
        }
    }

    // The player selects the Regular Room
    const handleRegularRoom = () => {
        if (player.money >= 50) {
            const newPlayerObject = { ...player }
            newPlayerObject.health = newPlayerObject.maxHealth
            newPlayerObject.mana = newPlayerObject.maxMana
            newPlayerObject.money = newPlayerObject.money - 20
            setPlayer(newPlayerObject)
            handleClose()
        }
    }

    // The player selects the Cheap Room
    const handleCheapRoom = () => {
        if (player.money >= 10) {
            const newPlayerObject = { ...player }
            newPlayerObject.health = newPlayerObject.health + newPlayerObject.maxHealth * 0.25
            newPlayerObject.mana = newPlayerObject.maxMana +  newPlayerObject.maxMana * 0.25
            newPlayerObject.money = newPlayerObject.money - 20
            setPlayer(newPlayerObject)
            handleClose()
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"xl"} >

            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="error">X</Button>
            </DialogActions>
            <DialogTitle>
                <Typography component="center" variant="h3">Ye Olde Inn</Typography>
            </DialogTitle>

            <DialogContent>

                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Typography component="center" variant="h6" fontWeight="bold" color="gold">Gold: {player.money}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography component="center" variant="h6" fontWeight="bold" color="red">Health: {player.health}/{player.maxHealth}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography component="center" variant="h6" fontWeight="bold" color="blue">Mana: {player.mana}/{player.maxMana}</Typography>
                    </Grid>
                </Grid>

                <Divider />

                <Box padding={5} justifyContent="center">
                    <Typography component="center" variant="h4">Greetings, {player.name}!</Typography>
                    <br />
                    <Typography component="center" variant="h5">Welcome to <i>The Iron Horse Inn.</i></Typography>
                    <Typography component="center" variant="h5">Please select a room that you wish to stay in.</Typography>
                    <br />
                    <Typography component="center" variant="h6">Luxury Room (50 Gold): Feel well rested! You will receive a 25% boost to your health and mana.</Typography>
                    <Typography component="center" variant="h6">Regular Room (20 Gold): A cozy room for you to relax. Fully restore your health and mana.</Typography>
                    <Typography component="center" variant="h6">Cheap Room (10 Gold): Not much in the way of comfort. Regain only 25% of your max health and mana.</Typography>
                </Box>


                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Button variant="contained" onClick={handleLuxuryRoom} disabled={player.money < 50}>Luxury room</Button>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" onClick={handleRegularRoom} disabled={player.money < 20}>Regular Room</Button>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" onClick={handleCheapRoom} disabled={player.money < 10}>Cheap Room</Button>
                    </Grid>
                </Grid>

                <br />

            </DialogContent>

        </Dialog>
    )
}

export default InnDialog;