import axios from "axios";

const movieAPITMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-EN'
    }
})

export default movieAPITMDB;