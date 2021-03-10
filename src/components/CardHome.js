import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ClearIcon from "@material-ui/icons/Clear";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
    },
    cardUser: {
        width: 435,
        height: 538,
        marginTop: 82,
        marginLeft: 227,
        boxSizing: "border-box",
        borderRadius: 10,
    },
    imgUser: {
        width: '100%',
        height: 'auto'
    },
    boxInfo: {
        width: 435,
        height: 103,
        border: '1px solid black',
        boxSizing: 'border-box',
        borderRadius: 10,
        marginLeft: 227
    },
    txtName: {
        fontSize: '36px',
        lineHeight: '24px',
        marginLeft: '36px',
        marginTop: '18px',
        marginBottom: '0px',
    },
    txtLocation: {
        fontSize: '18px',
        lineHeight: '24px',
        marginLeft: '36px',
        marginTop: '19px'
    },
    boxIcons: {
        width: 435,
        height: 103,
        marginLeft: 227,
        paddingLeft: 20,
        paddingTop: 23
    },
    buttonIcons: {
        width: 79,
        height: 72,
}
}));



const CardHome = () =>{
    const classes = useStyles();
    return(
        <div >
            <Card className={classes.cardUser} variant="outlined">
                <img className={classes.imgUser} src='https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_960_720.jpg'/>
            </Card>
            <div className={classes.boxInfo}>
                <p className={classes.txtName}>
                    Tania
                </p>
                <p className={classes.txtLocation}>
                    <LocationOnIcon/> 30 kilometros de distancia
                </p>
            </div>
            <div className={classes.boxIcons}>
                <Grid container spacing={6}
                      justify="center">
                    <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className={classes.buttonIcons}>
                            <ClearIcon style={{ fontSize: 72 }}
                                       color="disabled"
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className={classes.buttonIcons}>
                            <MessageIcon style={{ fontSize: 72 }}
                                         color="disabled"
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <Button href="#text-buttons" color="primary" className={classes.buttonIcons}>
                            <FavoriteBorderIcon style={{ fontSize: 72 }}
                                                color="disabled"
                            />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
            )
}
export default CardHome;