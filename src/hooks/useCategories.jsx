import React, { useEffect, useState } from 'react'
import { genreAPITMDBLists } from '../api/movieAPITMDB';

const useCategories = () => {

    const[isLoadingCat, setIsLoading] = useState(true);
    const [genresState, setGenresState] = useState({
        genresMovies: [],
        genresTV: [] 
    })

    const getGenres = async () => {
        const genresMoviesPromise = await genreAPITMDBLists.get('/genre/movie/list')
        const genresTVPromise = await genreAPITMDBLists.get('/genre/tv/list')

        // console.log(genresMoviesPromise);
        const res = await Promise.all([
            genresMoviesPromise,
            genresTVPromise
        ])

        setGenresState({
            genresMovies: genresMoviesPromise.data.genres,
            genresTV: genresTVPromise.data.genres
        })
        setIsLoading(false)
    }



    useEffect(() => {
        getGenres()
    }, [])
    

  return {
    ...genresState,
    isLoadingCat
  }
}

export default useCategories