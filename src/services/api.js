import axios from 'axios'

// BASE DA URL: https://api.themoviedb.org/3
// URL DA API: /movie/550?api_key=6b450b092e45611e0075def3bab2ca1b&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;