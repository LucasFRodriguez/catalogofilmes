import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

function Filme(){
    const { id } = useParams();

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "6b450b092e45611e0075def3bab2ca1b",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                console.log(response);
            })
            .catch(()=>{
                console.log("NAO ACHO NAO VIU, BURRO")
            })
        }


        loadFilme();
    }, [])


    return(
        <div>
            <h1>Acessando FILME {id} </h1>
        </div>
    )
}

export default Filme;