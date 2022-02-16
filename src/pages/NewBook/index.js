import React, { useState } from "react";

import {Link, useHistory} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function NewBook(){

    const [author,setAuthor] = useState('');
    const [title,setTitle] = useState('');
    const [launchDate,setLaunchDate] = useState(''); 
    const [price, setPrice] = useState('');
    
    const history = useHistory();

    async function createNewBook(e){
       
        e.preventDefault();
        const acessToken = localStorage.getItem('acessToken');

        const data = {
            title,
            author,
            launchDate,
            price
        }

        try{
            await api.post("/api/book/v1",data, {
                headers:{
                    Authorization: `Bearer${acessToken}`
            }
            });
            
        }
        catch(err)
        {
            alert('Error while recording Book, Try Again');

        }
        history.push('/book');
    }
    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt ="logotipo" />
                    <h1>Add new Book</h1>
                    <p>Enter the book information and click on add</p>
                    <Link className="back-link" to="/book">
                        <FiArrowLeft size = {16} color = "#251fc5"/>
                        Home
                    </Link>

                </section>

                <form onSubmit={createNewBook}>
                    <input 
                        placeholder = "Title"
                        value = {title}
                        onChange={e=> setTitle(e.target.value)}
                    />
                    <input 
                        placeholder="Author" 
                        value = {author}
                        onChange={e=> setAuthor(e.target.value)}    
                    /> 
                    <input 
                        type ="date"
                        value = {launchDate}
                        onChange={e=> setLaunchDate(e.target.value)}
                    />
                    <input 
                        placeholder="Price"  type="value"
                        value = { price }
                        onChange={e=>setPrice(e.target.value)}
                    /> 
                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}