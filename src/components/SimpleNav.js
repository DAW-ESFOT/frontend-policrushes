import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Head from "next/head";
import Link from "next/link";


const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: '#D57485',
      fontFamily: 'Fredoka One',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40px',
        lineHeight: '22px',
        position: 'absolute',

        left: '108px',

    },
    fondoBlanco:{
        height: 100,
        background: 'rgba(255, 255, 255, 0.82)',
        width: '100%',
    },
    box:{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    image:{
        left: '60px',
        width: '40px',
        height: '60px',
        position: 'absolute',
    },
    toolbar:{marginBottom:"10px",marginTop:"20px"}


  }));


  export default function SimpleNav() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.fondoBlanco}>
            <Toolbar className={classes.toolbar}>
            <img src='/buho.jpg'  className={classes.image} alt=""/>

              <Typography variant="h6" className={classes.title}>
                poliCrush
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
