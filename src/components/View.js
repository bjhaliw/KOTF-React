import React, { useEffect, useState } from 'react'
import { Grid, Paper, Box, Typography, TextareaAutosize, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import InnDialog from '../Util/InnDialog';
import StoreDialog from '../Util/StoreDialog';
import { Divider } from '@mui/material';

const useStyles = makeStyles(theme => ({
    textArea: {
        minWidth: 800,
        maxWidth: 800,
        minHeight: 610,
        maxHeight: 610
    },
    grid: {
        alignItems: "center",
        justifyContent: "center",
        height: 610,
        width: 300
    },
    buttons: {
        width: 150
    }
}));

function View(props) {

    const classes = useStyles()

    const [innOpen, setInnOpen] = useState(false)
    const [storeOpen, setStoreOpen] = useState(false)


    const handleCloseInn = () => {
        setInnOpen(false)
    }

    const handleCloseStore = () => {
        setStoreOpen(false)
    }

    useEffect(() => {
        console.log(innOpen)
    }, [innOpen])

    return (
        <>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                <Grid item>
                    <Paper elevation={2}>
                        <Grid container spacing={5} className={classes.grid} >

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Strength: {props.player.strength}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Dexterity: {props.player.dexterity}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Intelligence: {props.player.intelligence}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Charisma: {props.player.charisma}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Constitution: {props.player.constitution}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Wisdom: {props.player.wisdom}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item>
                    <TextareaAutosize className={classes.textArea} defaultValue="Welcome, player" onKeyDown={e => e.preventDefault()} />
                </Grid>

                <Grid item>
                    <Paper elevation={2}>
                        <Grid container spacing={5} className={classes.grid}>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Main-Hand: {props.player.mainHand.name + ", " + props.player.mainHand.skill + " +" + props.player.mainHand.value}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Off-Hand: {props.player.offHand.name + ", " + props.player.offHand.skill + " +" + props.player.offHand.value}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Helmet: {(props.player.helmet.name ? props.player.helmet.name + ", " + props.player.helmet.skill + " +" + props.player.helmet.value : "None")}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Armor:  {(props.player.armor.name ? props.player.armor.name + ", " + props.player.armor.skill + " +" + props.armor.armor.value : "None")}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Amulet:  {(props.player.amulet.name ? props.player.amulet.name + ", " + props.player.amulet.skill + " +" + props.player.amulet.value : "None")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="center">
                                    Ring:  {(props.player.ring.name ? props.player.ring.name + ", " + props.player.ring.skill + " +" + props.player.ring.value : "None")}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" spacing={10}>
                <Grid item>
                    <Button variant="contained" color="primary" className={classes.buttons} onClick={() => setInnOpen(true)}>Inn</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" className={classes.buttons} onClick={() => setStoreOpen(true)}>Store</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" className={classes.buttons}>Leave Town</Button>
                </Grid>
            </Grid>

            <InnDialog open={innOpen} onClose={handleCloseInn} player={props.player} setPlayer={props.setPlayer} />
            <StoreDialog open={storeOpen} onClose={handleCloseStore} player={props.player} setPlayer={props.setPlayer} />
        </>
    )
}

export default View;