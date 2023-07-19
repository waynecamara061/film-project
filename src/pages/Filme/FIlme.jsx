import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import api from '../../services/api';
import './style.css';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [filme, setFilme] = useState(<></>)


    useEffect(() => {
        async function loadingFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "eb1049889bd3bba960b1aeebf2809941",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false);
                })


                .catch((erro) => {
                    {
                        filme.id ? '' : navigate('/home', { replace: false, })
                    }
                    console.log(erro)
                })

        };
        loadingFilme()
    }, [navigate, id])

    return (
        <>
            {loading
                ?
                <div className="loading-container">
                    <ReactLoading type={"spin"} color={"black"} height={'90px'} width={'90px'} />
                </div>
                :
                <div className="filme-container">
                    <h1>{filme.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

                    <h2>
                        {filme.title}
                    </h2>
                    <span>
                        {filme.overview}
                    </span>
                    <strong>
                        {filme.vote_average} / 10
                    </strong>

                    <div className="btn-container">
                        <button>
                            salvar
                        </button>
                        <button>
                            <a href="#">
                                trailer
                            </a>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Filme;