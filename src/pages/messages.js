import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Home from './home';
import ChatBox from '../components/chat/ChatBox';
//import ChatList from '../components/chat/ChatList';

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
    nameitem: {
        marginLeft: 30,
    }
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
        {
            owner: "user",
            content: "hola joss",
            date: "hoy",
          },
          {
            owner: null,
            content: "hola carlos como estas ",
            date: "hoy",
          },
          {
            owner: "user",
            content: "hola carlos como estas ",
            date: "hoy",
          },
          {
            owner: "user",
            content: "||En casos excetpcionales, es posible que desees que un componente se oculte a sí mismo aunque haya sido renderizado por otro componente. Para hacer esto, devuelve null en lugar del resultado de renderizado",
            date: "hoy",
          },
          {
            owner: null,
            content: "nmbm . Al igual que en JavaScript, depende de ti elegir un estilo apropiado en base a lo que tu y tu equipo consideran más legible. Recuerda también que cuando las condiciones se vuelven demasiado complejas, puede ser un buen momento para extraer un componente.",
            date: "hoy",
          },
          {
            owner: "user",
            content: "hola carlos como estas ",
            date: "hoy",
          },
          {
            owner: null,
            content: "hola carlos como estas ",
            date: "hoy",
          }
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
            owner: "user",
            content: "hola carlos como estas ",
            date: "hoy",
          },
          {
            owner: "user",
            content: "||En casos excetpcionales, es posible que desees que un componente se oculte a sí mismo aunque haya sido renderizado por otro componente. Para hacer esto, devuelve null en lugar del resultado de renderizado",
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
  

const Messages = () => {

    const classes = useStyles();

    const [ friend, setFriend ] = useState({});

    const handleView = (chatinfo) => {
        setFriend(chatinfo);
        {/*console.log('obj info: ', friend);*/}
    }

    return(
        <Grid container >
            <Grid item xs={5} className={classes.cont1}>
                <Home/>
                <List className={classes.root}>
                    {chats.map((chat) => (
                        <>
                            <ListItem className={classes.itemuser} key={chat.user.id} alignItems="flex-start" button onClick={ () => handleView(chat)} >
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
                                    <h2 className={classes.nameitem}>{chat.user.name}</h2>
                                </Typography>
                            </React.Fragment>
                            } 
                            />
                        </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                    ))}
                </List>
            </Grid>
            <Grid item xs={7} className={classes.cont2}>
                <ChatBox props={friend}/>
            </Grid>
        </Grid>
    );
}

export default Messages;
