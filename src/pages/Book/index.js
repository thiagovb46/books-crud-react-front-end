import React, {useState, useEffect } from "react";

import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'
import logoimg from '../../assets/logo.svg'

import {Link, useHistory} from 'react-router-dom'
import './styles.css'
import api from "../../services/api";

export default function Book()
{
    const [books,setBooks ] = useState([]);
    
    const userName = localStorage.getItem('userName');

    const acessToken = localStorage.getItem('acessToken');

    const history = useHistory();


    useEffect(()=>{
        api.get('api/book/v1', {
            headers:{
                Authorization: `Bearer ${acessToken}`
            }
        }).then(response => { 
            
            setBooks(response.data);
           
        });
    }, [acessToken])

    async function deleteBook(id){
        try{
            await api.delete(`api/book/v1/${id}`,{
                headers:{
                    Authorization: `Bearer ${acessToken}`
                }
            });

            setBooks(books.filter(book=>book.id!=id));
        }
        catch(error){
            alert("Error while deleting Book");

        }
    }
    

    return ( 
        <div className = "book-container">
            <header>
                <img src={logoimg} al = "logotipo" />
                <span>Welcome, 
                    <strong>{userName}</strong>
                </span>
                <Link className="button" to ="book/new">Add new Book</Link>
                <button type="button">
                    <FiPower size={18} color = "#251fc5"/>
                </button>
            </header>
            <h1>Registered Books</h1>
                <ul>
                    {books.map(book=>(
                    <li>
                        <strong>Title: </strong>
                        <p>{book.title}</p>
                        <strong>Author: </strong>
                        <p>{book.author}</p>
                        <strong>Price: </strong>
                        <p>{Intl.NumberFormat('pt-br', {style:'currency', currency:'BRL'}).format(book.price)}</p>
                        <strong>Release Date: </strong>
                        <p>{book.launchDate}</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button onClick={()=> deleteBook(book.id)} type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    ))}
                   
                </ul>

        </div>
        )
}