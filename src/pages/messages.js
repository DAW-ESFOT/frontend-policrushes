import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ChatBox from '../components/chat/ChatBox';
import ChatList from '../components/chat/ChatList';
import NavHome from "../components/NavHome";

const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
    },
  }));


const Messages = () => {

    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={5} className={classes.cont1}>
                <NavHome/>
                <ChatList/>
            </Grid>
            <Grid item xs={7} className={classes.cont2}>
                <ChatBox/>
            </Grid>
        </Grid>
    );
}

export default Messages;