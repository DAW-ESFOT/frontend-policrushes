import React from 'react';
import styles from '../styles/Chatbox.module.css';

const Chatbox = () => {
    return(
        <div>
            <div className={styles.chat}>
                <div className={styles.image}>
                    <img className={styles.img_user} src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                </div>
                <h4>User</h4>    
            </div>
            <div className={styles.chat_container}>
                <div id={styles.user_2}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.</label>
                </div><br/>
                <div id={styles.user_1}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.</label>
                </div><br/>
                <div id={styles.user_2}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.</label>
                </div><br/>
                <div id={styles.user_2}>
                    <label>sencillo. Construya su propio sistema de diseño, o empiece con Material Design.</label>
                </div><br/>
                <div id={styles.user_1}>
                    <label>Componentes de React para un desarrollo web más rápido</label>
                </div><br/>

                <div id={styles.user_2}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. .</label>
                </div><br/>
                <div id={styles.user_1}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.</label>
                </div><br/>
                <div id={styles.user_1}>
                    <label>Componentes de React para un desarrollo web más rápido y sencillo. o empiece con Material Design.</label>
                </div><br/>
                
            </div>
            <div className={styles.text}>
                <form action="">
                    <textarea className={styles.textarea} autofocus placeholder="message" requiered cols="20" rows="2"></textarea>
                    <button  className={styles.send} type="submit">enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Chatbox;