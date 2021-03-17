import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import { InputBase } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "99%",
  },
  demo: {
    height: 400,
    width: "100%",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#e88192',
      outline: '1px solid slategrey'
    }
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  inline: {
    display: 'inline',
    marginRight: 30,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  username: {
    marginRight: 50,
    marginLeft: 40,
  },
  my_paper: {
    maxWidth: "80%",
    borderRadius: 30,
    fontSize: 20,
    background: "#b7b3b3",
    padding: theme.spacing(2),
    textAlign: "right",
    float: "right",
    padding: 20,
  },
  paper: {
    maxWidth: "80%",
    borderRadius: 30,
    fontSize: 20,
    background: "#ea6990",
    padding: theme.spacing(2),
    textAlign: "left",
    float: "left",
    padding: 20,
  },
  form:{
    '& .MuiTextField-root': {
      width: '25ch',
      display: "flex",
    },
  },
  text: {
    fontSize: 20,
    padding: 20,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    borderRadius: 20,
  },
  button: {
    borderRadius: "100%",
    margin: 0,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  messbox: {
    background: "#e8aeb7",
    margin: 20,
    marginRight: 50,
    width: "90%",
    height: 45,
    borderRadius: 30,
    fontSize: 20,
    padding: 30,
    border: "solid 1 black",
  },
  back: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    textAlign: 'center',
    color: '#df94a1',
  },
  card: {
    fontSize: 40,
    display: "flex",
    borderTop: "black",
  },
  avatar:{
    width: 100,
    height: 100,
    borderRadius: "100%",
    margin: 20,
  }
}));

const ChatBox = (chats) => {
  const classes = useStyles();

  console.log('boxchat', chats);
  console.log('nombre', chats.props.user);

  return (
    <div className={classes.root}>
      {
        chats.props.user
        ?
        <>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <div>
            <Grid className={classes.card}>
              <img src={chats.props.user.photoUrl} className={classes.avatar} />
              <p >
                <strong>{chats.props.user.name}</strong>
              </p>
            </Grid>
            </div>
            <div className={classes.demo}>
              <List >
                {
                  chats.props.messages.map((message) => (
                    message.owner
                    ?
                    <ListItem>
                      <Grid item xs={2}>
                        <Paper></Paper>
                      </Grid>
                      <Grid item xs={9}>
                        <Paper className={classes.my_paper}>{message.content}</Paper>
                      </Grid>
                    </ListItem>
                    :
                    <ListItem>
                      <Grid item xs={9}>
                        <Paper className={classes.paper}>{message.content}</Paper>
                      </Grid>
                      <Grid item xs={2}>
                        <Paper></Paper>
                      </Grid>
                    </ListItem>
                  ))
                }
              </List>
            </div>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate autoComplete="off">
          <ListItem>
            <Grid item xs={9}>
              <InputBase className={classes.messbox}></InputBase>
            </Grid>
            <Grid item xs={3}>
              <Button>
                <SendIcon style={{ fontSize: 40 }}/>
              </Button>
            </Grid>
          </ListItem>
        </form>
        </>
        :
        <div className={classes.back}>
          <img src='https://i.pinimg.com/originals/e7/a7/89/e7a789d3da94210f9bfa806806f3dafb.png'/>
          <h1>Conoce nuevas personas, podrias iniciar nuevas amistades o una linda relacion</h1>
          <br/>
          <br/>
          <h3>POLICRUSH®</h3>
          <h3>BY: RESPONSIVE CREATION INC.   </h3>
          
        </div>
      }
    </div>
  );
}

export default ChatBox;
