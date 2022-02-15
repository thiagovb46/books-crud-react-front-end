import React from "react";

import {FiPower} from 'react-icons/fi'
import logoimg from '../../assets/logo.svg'

import {Link} from 'react-router-dom'
import './styles.css'

export default function Book()
{

    return ( 
        <div className = "book-container">
            <header>
                <img src={logoimg} al = "logotipo" />
                <span>Welcome, 
                    <strong>firstName</strong>
                </span>
                <Link className="button" to ="book/new">Add new Book</Link>
                <button type="button">
                    <FiPower size={18} color = "#251fc5"/>
                </button>
            </header>

        </div>
        )
}