import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Home from './home';

const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
    },
  }));

const Favorites = () => {

    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={5} className={classes.cont1}>
                <Home/>
                <div>favoritos</div>
            </Grid>
            <Grid item xs={7} className={classes.cont2}>
                <div>contenido de favoritos</div>
            </Grid>
        </Grid>
    );
}

export default Favorites;