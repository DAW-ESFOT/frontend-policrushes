import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    background: "#968e8e"
  },
  demo: {
    height: 400,
    width: "100%",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
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
    borderRadius: 30,
    color: "black",
    fontSize: 25,
    background: "#b7b3b3",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    borderRadius: 30,
    color: "black",
    fontSize: 25,
    background: "#ea6990",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form:{
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  text: {
    borderRadius: 20,
    width: 250,
  },
  button: {
    margin: theme.spacing(1),
    width: 50,
    height: 50,
    borderRadius: "100%",
    float: "rigth",
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "0 auto",
  }
}));

const ChatBox = (chats) => {
  const classes = useStyles();

  console.log('boxchat', chats);
  console.log('nombre', chats.props.user);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <div>
            <Card variant="outlined" className='box'>
              <img className='img-users' src={chats.props.user.photoUrl} className='avatar-user'  />
              <p className='font-name'>
              <strong>{chats.props.user.name}</strong>
              </p>
            </Card>
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
        <TextField
          className={classes.text} 
          id="filled-multiline-static"
          label="Mensaje"
          multiline
          rows={2}
          cols={30}
          variant="filled"
        />
        <Button              
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
        >
        </Button>
      </form>
    </div>
  );
}

export default ChatBox;
