import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Link from "next/link";
import ButtonGroup from '@material-ui/core/ButtonGroup';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

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
                    <Card variant="outlined" className='box'>
                      <img className='img-users' src={user.photoUrl} className='avatar-user'  />
                      <p className='font-name'>
                       <strong>{user.name}</strong>
                      </p>
                    </Card>
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
