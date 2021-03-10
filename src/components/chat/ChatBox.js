import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  demo: {
    height: 400,
    width: "100%",
    overflowY: "scroll",
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
  },
  paper: {
    maxWidth: "80%",
    borderRadius: 30,
    fontSize: 20,
    background: "#ea6990",
    padding: theme.spacing(2),
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
    borderRadius: "100%",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  messbox: {
    with: 200,
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
                      <div >
                        <Paper></Paper>
                      </div>
                      <div className={classes.messbox}>
                        <Paper className={classes.my_paper}>{message.content}</Paper>
                      </div>
                    </ListItem>
                    :
                    <ListItem>
                      <div className={classes.messbox}>
                        <Paper className={classes.paper}>{message.content}</Paper>
                      </div>
                      <div>
                        <Paper></Paper>
                      </div>
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
        </>
        :
        <div>
          no ahi mensajes
        </div>
      }
    </div>
  );
}

export default ChatBox;
