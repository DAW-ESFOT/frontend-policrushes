import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from  '../pages/login';
import Inicio from "./inicio";


export default function Home() {

  return (
     <div className={styles.container}>

     <Inicio/>

    </div>
    )
}
