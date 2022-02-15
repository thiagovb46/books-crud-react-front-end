import React from "react";

import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'
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
            <h1>Registered Books</h1>
                <ul>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    <li>
                        <strong>Title: </strong>
                        <p>Titul do livri aqui</p>
                        <strong>Author: </strong>
                        <p>Fulano de tal</p>
                        <strong>Price: </strong>
                        <p>R$ 10.00</p>
                        <strong>Release Date: </strong>
                        <p>27/10/2018</p>

                        <button type = "button">
                            <FiEdit  size={20} color ="#251fc5"/>

                        </button>

                        <button type = "button">
                        <FiTrash2 size={20} color ="#251fc5"/>
                        </button>

                    </li>
                    
                </ul>

        </div>
        )
}