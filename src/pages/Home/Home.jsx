import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import "./style.css";
import ReactLoading from 'react-loading';

function Home() {
    //URL da API: movie/now_playing
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "eb1049889bd3bba960b1aeebf2809941",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilme(response.data.results.slice(0, 10));
            setLoading(false)

        }
        loadFilmes()
    }, [])

    if (loading) {
        return (
            <div className="loading-container">
                <ReactLoading type={"spin"} color={"black"} height={'90px'} width={'90px'} />
            </div>
        )
    }
    return (
        <div className="container-film-list">
            <div className="filme-list-content">
                {filme.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <h1>{filme.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home;    