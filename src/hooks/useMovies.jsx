// import React from 'react'

import { useEffect, useState } from "react"
import movieAPITMDB from "../api/movieAPITMDB"

const useMovies = () => {

    const[isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {
        const nowPlayingPromise = movieAPITMDB.get('/now_playing')
        const popularPromise = movieAPITMDB.get('/popular')
        const topRatedPromise = movieAPITMDB.get('/top_rated')
        const upcomingPromise = movieAPITMDB.get('/upcoming')

        const res = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upcoming: res[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading,
    }
}

export default useMovies