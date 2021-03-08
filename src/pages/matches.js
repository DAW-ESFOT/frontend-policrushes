import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardHome from "../components/CardHome";
import NavHome from "../components/NavHome";

const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
    },
  }));

const Matches = () => {

    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={5} className={classes.cont1}>
                <NavHome/>
                <div>match</div>
            </Grid>
            <Grid item xs={7} className={classes.cont2}>
                <CardHome/>
            </Grid>
        </Grid>
    );
}

export default Matches;