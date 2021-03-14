import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Grid from '@material-ui/core/Grid';
import Head from "next/head";
import Link from "next/link";

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({
    image:{
        width: '49px',
        height: '75px',
        marginLeft: '43%'
    },
    imageCheck:{
        width: '30px',
        height: '30px'
    },
    textTitle:{
        fontSize: '26px',
        textAlign: 'center'
    },
    textRules:{
        marginTop:'4px',
        color:'black'
    },

}));

const ModalRules = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                   <div>
                       <img src='/buho.jpg' className={classes.image} alt=""/>
                   </div>
                    <div className={classes.textTitle}>
                       <strong>Te damos la bienvenida</strong>

                    </div>
                    <div className={classes.textTitle}>
                        Reglas Internas
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                            <img src="/check.jpg" className={classes.imageCheck} alt=""/>
                            </Grid>
                            <Grid item xs={10} className={classes.textRules}>
                                No finjas ser alguien más
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <img src="/check.jpg" className={classes.imageCheck} alt=""/>
                            </Grid>
                            <Grid item xs={10} className={classes.textRules}>
                                No des tu información personal
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <img src="/check.jpg" className={classes.imageCheck} alt=""/>
                            </Grid>
                            <Grid item xs={10} className={classes.textRules}>
                                Respeta a los demás
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
export default ModalRules;