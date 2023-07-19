import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

function Erro() {
    return (
        <div className='erro-content'>
            <h1>
                Erro! <br /> Rota não encontrada
            </h1>
            <Link to={"/home"} >
                <button>
                    Voltar para pagina inicial
                </button>
            </Link>
        </div>
    )
}

export default Erro;