import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Home from './home';

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
                <Home/>
                <div>match</div>
            </Grid>
            <Grid item xs={7} className={classes.cont2}>
                <div>match</div>
            </Grid>
        </Grid>
    );
}

export default Matches;