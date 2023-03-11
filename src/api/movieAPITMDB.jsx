import axios from "axios";

export const movieAPITMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-EN'
    }
})

export const tvShowsAPITMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv',
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-EN'
    }
})

export const genreAPITMDBLists = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-EN'
    }
})


