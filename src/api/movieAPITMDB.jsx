import axios from "axios";

export const movieAPITMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'aa6e9aaf80993d8579b8db08c4185d85',
        language: 'en-EN'
    }
})

export const tvShowsAPITMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv',
    params: {
        api_key: 'aa6e9aaf80993d8579b8db08c4185d85',
        language: 'en-EN'
    }
})

export const genreAPITMDBLists = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'aa6e9aaf80993d8579b8db08c4185d85',
        language: 'en-EN'
    }
})


