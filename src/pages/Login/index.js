import React,{useState} from "react";

import { useHistory } from "react-router-dom";

import api from '../../services/api';
import './styles.css'

import '../../global.css';
import padlockImage from '../../assets/padlock.png'
import { useEffect } from "react/cjs/react.development";

export default function Login(){


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e){
        
        e.preventDefault();
        const data = {
            userName,
            password,
        };

        try{

            const response = await api.post('/api/auth/v1/signin',data);
            localStorage.setItem('userName', userName);
            localStorage.setItem('acessToken', response.data.acessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)

            history.push('/book');

        }
        catch(error){
            alert('login failed', error);
        }

    }
    
    return (
        <div className="login-container">
            <section className="form">
                <img src = {padlockImage} />
                <form onSubmit={login}>
                    <h1>Acess Your Account</h1>
                    <input 
                        placeholder="username"
                        value = {userName}
                        onChange={e=>setUserName(e.target.value)}
                    />
                    <input 
                        placeholder="password" 
                        type="password" 
                        value ={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button  className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    );

}