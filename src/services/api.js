import axios from "axios";

const api = axios.create({
    //URL da API
    //https://api.themoviedb.org/3/movie/11?api_key=eb1049889bd3bba960b1aeebf2809941
    baseURL: "https://api.themoviedb.org/3"
})

export default api;