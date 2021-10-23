import React, { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    text: {
        fontWeight: "bold",
        textShadow: "1px 1px #000000"
    }
}));


function PlayerInfo(props) {

    const classes = useStyles()

    const [player, setPlayer] = useState(props.player)

    useEffect(() => {
        if (props.player !== player) {
            setPlayer(props.player)
        }
    }, [props.player] )

    return (
        <div className="PlayerInfo">

            <Grid item container padding={2} justifyContent="center">
                <Grid item>
                    <Typography variant="h3" className={classes.text}>
                        {player.name} the {player.characterClass}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container  spacing={4} direction="row" justifyContent="center">

                <Grid item>
                    <Typography className={classes.text} variant="h4" color="red">
                        Health: {player.health}/{player.maxHealth}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h4" color="blue" className={classes.text}>
                        Mana: {player.mana}/{player.maxMana}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h4" color="gold" className={classes.text}>
                        Gold: {player.money}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h4" color="green"  className={classes.text}>
                        Level: {player.level}
                    </Typography>

                </Grid>

                <Grid item>
                    <Typography variant="h4" className={classes.text}>
                        Experience: {player.experience}
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
}

export default PlayerInfo;