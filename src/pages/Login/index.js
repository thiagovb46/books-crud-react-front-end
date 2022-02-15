import React from "react";

import './style.css'

import '../../global.css';
import padlockImage from '../../assets/padlock.png'

export default function Login(){
    
    return (
        <div className="login-container">
            <section className="form">
                <img src = {padlockImage} />
                <form>
                    <h1>Acess Your Account</h1>
                    <input placeholder="username"/>
                    <input placeholder="password" type="password" />
                    <button  className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    );

}