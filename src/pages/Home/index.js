import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// URL DA API: /movie/now_playing?api_key=6b450b092e45611e0075def3bab2ca1b&language=pt-BR


function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "6b450b092e45611e0075def3bab2ca1b",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response);
            setFilmes(response.data.results.slice(0,10))

        }

        loadFilmes();

    },[])

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;