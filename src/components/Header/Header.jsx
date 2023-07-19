import React from 'react'
import { Link } from "react-router-dom";
import './Style.css';


function Header() {
    return (
        <>
            <div className='container-header'>
                <a href="/home">Prime flix</a>
                <a href="/favoritos">Meus filmes</a>
            </div>
        </>
    )
}

export default Header;