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

function StoreDialog(props) {

    // Custom UI styles
    const classes = useStyles()

    // Our props
    const { onClose, player, open, setPlayer } = props;

    // Close the dialog
    const handleClose = () => {
        onClose();
    };

    const mainHand = [
        { name: "Sword of Truth", skill: "Attack", value: 10, price: 100 },
        { name: "Staff of Sorrows", skill: "Attack", value: 10, price: 100 },
        { name: "Bow of Dank Memes", skill: "Attack", value: 10, price: 100 }
    ]

    const offHand = [
        { name: "Shield of Destiny", skill: "Defense", value: 10, price: 100 },
        { name: "Orb of Mystery", skill: "Defense", value: 10, price: 100 },
        { name: "Dagger of Daggers", skill: "Defense", value: 10, price: 100 }
    ]

    const helmet = [
        { name: "Helmet of Destruction", skill: "Defense", value: 10, price: 100 },
        { name: "Wizard Hat of the Skies", skill: "Defense", value: 10, price: 100 },
        { name: "Leather Cap of Wimps", skill: "Defense", value: 10, price: 100 },
        
    ]

    const armor = [
        { name: "Armor of Memes", skill: "Defense", value: 10, price: 100 },
        { name: "Heaven's Robe", skill: "Defense", value: 10, price: 100 },
        { name: "Leather Armor", skill: "Defense", value: 10, price: 100 },
    ]

    const amulet = [
        { name: "Amulet of Smiting", skill: "Strength", value: 10, price: 100 },
        { name: "The Mind's Eye", skill: "Intelligence", value: 10, price: 100 },
        { name: "Pick of Destiny", skill: "Defense", value: 10, price: 100 },
    ]

    const ring = [
        { name: "Ring of Stealth", skill: "Defense", value: 10, price: 100 },
        { name: "The One True Ring", skill: "Defense", value: 10, price: 100 },
        { name: "High School Class Ring", skill: "Defense", value: 10, price: 100 },
    ]

    const potions = [
        
    ]

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"xl"} >

            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="error">X</Button>
            </DialogActions>
            <DialogTitle>
                <Typography component="center" variant="h3">Ye Olde General Store</Typography>
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
                    <Typography component="center" variant="h5">Welcome to <i>The General Store.</i></Typography>
                    <Typography component="center" variant="h5">Feel free to purchase or sell whatever you like.</Typography>
                    <br />
                </Box>



                <br />

            </DialogContent>

        </Dialog>
    )
}

export default StoreDialog;