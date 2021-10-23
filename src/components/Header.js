import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { AppBar, Button, Box } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    appBar: {
        background: '#2E3B55',
    },
    grid: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Box padding={1} >
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs>
                            <Typography variant="h3" >
                                Knights of the Fallen
                            </Typography>
                        </Grid>

                        <Grid item >
                            <Button variant="contained" color="secondary">Save Game</Button>
                        </Grid>


                        <Grid item >
                            <Button variant="contained" color="secondary">Load Game</Button>
                        </Grid>

                    </Grid>
                </Box>
            </AppBar>
        </div>
    );
}