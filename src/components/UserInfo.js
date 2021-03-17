import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: `345px`,
    textAlign: `center`,
  },
  media: {
    height: `400px`,
  },
  Card: {
    justifyContent: `center`,
    borderTop: `1px solid #000000`,
  },

  Icon: {
    width: `50px`,
    height: `50px`,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const compatibles = [
  {
    id: 7,
    name: "Prof. Shaniya Breitenberg Sr.",
    email: "velda87@yahoo.com",
    email_verified_at: null,
    birthdate: "2000-05-23 23:15:23",
    password: "$2y$10$ojAIMlGpeGO2qhz4KvNgd.dNCcz4aXfFMkIhH97yXKx4R74xXUZo6",
    remember_token: null,
    created_at: "2021-03-03 23:01:10",
    updated_at: "2021-03-03 23:01:10",
    gender: "female",
    age: 26,
    description: "me gusta comer pizza",
    location: null,
    address: "Wayne Gottlieb",
    min_age: 19,
    max_age: 24,
    preferred_gender: "male",
    preferred_pet: "peces",
    lng: "-0.21925400",
    lat: "78.48475800",
    role: "ROLE_USER",
    image: "public/images/f54ec7c65d386d256b3d10eedad290d0.png",
    photoUrl:
      "127.0.0.1:8000/storage/images/4c4a00ced4dcc4f988a91bd1208475e9.png",
  },

  {
    id: 11,
    name: "Ronny Cajas",
    email: "ronny.cajas@epn.edu.ec",
    email_verified_at: null,
    birthdate: "1996-06-01 14:02:07",
    created_at: "2021-03-03T23:01:31.000000Z",
    updated_at: "2021-03-03T23:01:31.000000Z",
    gender: "male",
    age: 22,
    description: "me gusta comer pizza",
    location: null,
    address: null,
    min_age: 18,
    max_age: 28,
    preferred_gender: "female",
    preferred_pet: "cats",
    lng: "20.00000000",
    lat: "20.00000000",
    role: "ROLE_USER",
    image: "public/images/PISslx4RyL2ouwp5uImjY6r8MS9ioz0KVPZhCZyt.png",
    music_genres: ["rock"],
    movie_genres: ["terror", "comedia"],
    imageUrl:
      "127.0.0.1:8000/storage/images/PISslx4RyL2ouwp5uImjY6r8MS9ioz0KVPZhCZyt.png",
  },
];

export default function Geolocation() {
  const [user, setUser] = useState(compatibles[0]);
  const [index, setIndex] = useState(0);

  const pickUser = (user) => {
    setUser(user);
  };

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.CardContent}>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/22/24/c0/2224c071c6ed67409016ab393d5900af.jpg"
          title="Compatible"
        />
        <CardContent>
          <Typography gutterBottom variant="body" component="h2">
            {user.name}
          </Typography>
          <Typography gutterBottom variant="body" component="h2">
            {user.age} años
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <KeyboardArrowDownIcon className={classes.Icon} />
          </IconButton>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{user.description}</Typography>
          <Typography paragraph>{user.birthdate}</Typography>
          <Typography paragraph>{user.gender}</Typography>
          <Typography>{user.location}</Typography>
          <Typography paragraph>{user.movie_genres}</Typography>
          <Typography paragraph>{user.music_genres}</Typography>
          <Typography paragraph>{user.preferred_gender}</Typography>
          <Typography paragraph>{user.preferred_pet}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
