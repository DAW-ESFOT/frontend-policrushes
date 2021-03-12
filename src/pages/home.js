import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Link from "next/link";
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    card: {
      background: "#e8aeb7",
      fontSize: 40,
      display: "flex",
    },
    avatar:{
      width: 100,
      height: 100,
      borderRadius: "100%",
      margin: 20,
    }
}));

const user = {
  id: 10,
  name: "Fransisco Flores",
  photoUrl: "https://eststatic.com/2676/conversions/malas-personas-social.jpg",
}


const Home = () =>{

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div >
            <Grid container >
                <Grid item xs={12}>
                  <div>
                    <Grid className={classes.card}>
                      <img  src={user.photoUrl} className={classes.avatar} />
                      <p >
                       <strong>{user.name}</strong>
                      </p>
                    </Grid>
                  </div>
                    <Paper  className={classes.root}>
                      <Grid className={classes.nav}>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                          <Button><Link href='/matches'>Matches</Link></Button>
                          <Button><Link href='/messages'>Mensajes</Link></Button>
                          <Button><Link href='/favorites'>Favoritos</Link></Button>
                        </ButtonGroup>
                      </Grid>
                  </Paper>
                </Grid>
            </Grid>

        </div>

    );

}
export default Home;
