import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    height: 450,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  itemuser: {
    height: 110,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const chats = [
  {
    user: {
      id: 1,
      name: "Ronny Cajas",
      photoUrl: "https://eststatic.com/2676/conversions/malas-personas-social.jpg",
    },
    date: "hoy",
    messages: [
      {
        owner: "user",
        content: "hola ... ",
        date: "hoy",
      },
      {
        owner: null,
        content: "hola carlos como estas ",
        date: "hoy",
      },
    ],
  },
  {
    user: {
      id: 2,
      name: "Josselyn Troya",
      photoUrl: "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg",
    },
    date: "hoy",
    messages: [
      {
        owner: "user",
        content: "hola joss",
        date: "hoy",
      },
      {
        owner: null,
        content: "hola carlos",
        date: "hoy",
      },
    ],
  },
  {
    user: {
      id: 3,
      name: "John Vasquez",
      photoUrl: "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg",
    },
    date: "hoy",
    messages: [
      {
        owner: "user",
        content: "hola que te cuentas?",
        date: "hoy",
      },
      {
        owner: null,
        content: "hola guapo :v",
        date: "hoy",
      },
    ],
  },
  {
    user: {
      id: 4,
      name: "Pedro Juares.",
      photoUrl: "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg",
    },
    date: "hoy",
    messages: [
      {
        owner: "user",
        content: "hola jossque ams ve",
        date: "hoy",
      },
      {
        owner: null,
        content: "hola carlos",
        date: "hoy",
      },
    ],
  },
  {
    user: {
      id: 5,
      name: "Jaela Beltran",
      photoUrl: "https://cdnb.20m.es/sites/112/2019/04/cara6-620x618.jpg",
    },
    date: "hoy",
    messages: [
      {
        owner: null,
        content: "pasa el deber llave....",
        date: "hoy",
      },
      {
        owner: null,
        content: ":v..",
        date: "hoy",
      },
      {
        owner: "user",
        content: "...ss...... ",
        date: "hoy",
      },
    ],
  }
];

export default function ChatList() {

  const classes = useStyles();
  const [ iduser, setId ] = useState('');
  const [ name, setName ] = useState('');
  const [ photoURL, setPhotoURL] = useState('');
  const [ messages, setMessages ] = useState([]); 

  console.log('chats', chats)

  const handleView = (id, name, photo, messages) => {
    console.log('boton:', id)
    setId(id);
    console.log('id:', id);
    setName(name);
    console.log('nombre', name);
    setPhotoURL(photo);
    console.log('url',photo);
    setMessages(messages);
    console.log('mensajes',messages);
  }

  return (
    <>
    <List className={classes.root}>
      {
        chats.map((chat) => (
          <>
            <ListItem className={classes.itemuser} key={chat.user.id} alignItems="flex-start" button onClick={ () => handleView(chat.user.id,chat.user.name, chat.user.photoUrl, chat.messages )} >
              <ListItemAvatar>
                <Avatar className={classes.large} alt="Remy Sharp" src={chat.user.photoUrl} />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      <h2>{chat.user.name}</h2>
                    </Typography>
                  </React.Fragment>
                } 
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      }
    </List>
    </>
  );
}

