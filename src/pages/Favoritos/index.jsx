import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { toast } from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const getToken = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(getToken) || [])

    }, [])

    function handleDeleteFilme(id) {
        toast.success("Filme excluido da sua lista");
        const filterFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filterFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filterFilmes))
    }

    return (
        <section>
            <div className="favoritos-container">
                <h1>Meus filmes</h1>
                {filmes.length === 0 && <span>Você não possui nenhum filme salvo :/ </span>}
                <ul>
                    {filmes.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <div className="more-info">
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={() => handleDeleteFilme(item.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        </section>
    )
}

export default Favoritos;