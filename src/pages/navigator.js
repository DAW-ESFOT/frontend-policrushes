import React, {useState, useEffect} from "react";
//import './navigator.css';
import Nav from '../components/Nav.js';
import Chat from '../components/Chat.js';

const Navigator = () => {
    const [ chats, setChats ] = useState([]);
    //const [ name, setName ] = useState('');

    useEffect( ()=> {
        const fetchChat= async () => {
            const response = await fetch('https://fakemyapi.com/api/fake?id=91e7f84c-9b96-49e1-a06f-12255fbee9cc');
            const json = await response.json();
            //setName(json.name);
            console.log('json', json);
            setChats(json.data);
            return json;
        };

        fetchChat();
    }, []);


    return (
        <div className="content">
            <div className="chat_list">
                <div className="perfil">
                    <div className="image">
                        <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                    </div>
                    <h4>Mi Perfil</h4>
                    <button>Editar</button>
                </div>
                <Nav/>
                <div className="user_list">
                    <div className="user_chat">
                        <div className="image">
                            <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                        </div>
                        <h4>Friend</h4>
                        <button>Chatear</button>
                    </div>
                    <div className="user_chat">
                        <div className="image">
                            <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                        </div>
                        <h4>Friend</h4>
                        <button>Chatear</button>
                    </div>
                    <div className="user_chat">
                        <div className="image">
                            <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                        </div>
                        <h4>Friend</h4>
                        <button>Chatear</button>
                    </div>
                    <div className="user_chat">
                        <div className="image">
                            <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                        </div>
                        <h4>Friend</h4>
                        <button>Chatear</button>
                    </div>
                    <div className="user_chat">
                        <div className="image">
                            <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                        </div>
                        <h4>Friend</h4>
                        <button>Chatear</button>
                    </div>
                </div>                
            </div>
            <div>
                <div className="chat">
                    <div className="image">
                        <img className="img_user" src="https://i.blogs.es/2d5264/facebook-image/450_1000.jpg"/>
                    </div>
                    <h4>User</h4>    
                </div>
                <div className="chat_container">
                    <Chat/>
                </div>
                <div className="text">
                    <form action="">
                        <textarea className="textarea" autofocus placeholder="message" requiered cols="30" rows="2"></textarea>
                        <button  className="send" type="submit">enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Navigator;