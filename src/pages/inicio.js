import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ClearIcon from '@material-ui/icons/Clear';
import MessageIcon from '@material-ui/icons/Message';


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

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});




const Inicio = () =>{

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div >
            <Grid container >
                <Grid item xs={5}>
                    <div>

                        <Card variant="outlined" className='box'>
                            <img className='img-users' src="https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_960_720.jpg" className='avatar-user'  />
                            <p className='font-name'>
                                   <strong>Tania</strong>
                            </p>

                        </Card>
                    </div>

                    <Paper  className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Matches" />
                            <Tab label="Mensajes" />
                            <Tab label="Favoritos" />
                        </Tabs>
                        <TabPanel value={value} index={0}>


                            <Grid container spacing={1} >
                            <Grid item xs={4} spacing={3}>

                                <Card className={classes.root} variant="outlined">
                                    <img className='img-users' src="https://cdn.pixabay.com/photo/2016/06/17/09/54/beauty-1462986_960_720.jpg" alt=""/>
                                </Card>

                            </Grid>
                            <Grid item xs={4} spacing={3}>
                                <Card className={classes.root} variant="outlined">
                                    <img className='img-users' src="https://cdn.pixabay.com/photo/2017/03/17/04/07/beautiful-2150881_960_720.jpg" alt=""/>
                                </Card>


                            </Grid>
                            <Grid item xs={4} spacing={3}>

                                <Card className={classes.root} variant="outlined">
                                    <img className='img-users' src="https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg" alt=""
                                    />
                                </Card>


                            </Grid>
                            </Grid>



                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item 2
                        </TabPanel>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Card className='card-user' variant="outlined">
                        <img className='img-users' src='https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_960_720.jpg'/>
                    </Card>
                    <div className='box-info'>
                        <p className='txt-name'>
                            Tania
                        </p>
                        <p className='txt-location'>
                            <LocationOnIcon/> 30 kilometros de distancia
                        </p>
                    </div>
                    <div className='box-icons'>
                        <Grid container spacing={6}
                              justify="center">
                            <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className='button-icons'>
                            <ClearIcon style={{ fontSize: 72 }}
                                       color="disabled"
                            />
                        </Button>
                            </Grid>
                            <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className='button-icons'>
                            <MessageIcon style={{ fontSize: 72 }}
                                         color="disabled"
                            />
                        </Button>
                            </Grid>
                                <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className='button-icons'>
                            <FavoriteBorderIcon style={{ fontSize: 72 }}
                                                color="disabled"
                            />
                        </Button>
                                </Grid>

                        </Grid>
                    </div>
                </Grid>
            </Grid>

        </div>

    );

}
export default Inicio;

