import React, { createContext, useEffect, useState } from 'react'
import useCategories from '../hooks/useCategories'
import useMovies from '../hooks/useMovies'
import useTVShows from '../hooks/useTVShows'

const GlobalStateContext = createContext()

const GlobalStateProvider = ({children}) => {

  //states
  const [credentials, setCredentials] = useState({
    api_key: import.meta.env.VITE_API_KEY,
    language: 'en-EN'
  })
  const [genresHome, setGenresHome] = useState([])
  const [tendingMovie, setTendingMovie] = useState([])

  //Hooks
  const { nowPlaying, popular, upcoming, topRated, isLoadingMovie} = useMovies();
  const {nowPlayingTV, topRatedTV, popularTV, isLoadingTV} = useTVShows();
  const {isLoadingCat, genresMovies, genresTV} = useCategories();


  useEffect(() => {
    const newElements = genresMovies.slice(0, 8);
    setGenresHome(newElements);
  }, [genresMovies])

  useEffect(() => {
    const tending = topRated.slice(0, 4)
    setTendingMovie(tending)
  }, [topRated])
  
  


  // console.log(popularTV);
  
  return (
    <GlobalStateContext.Provider
      value={{
        //-- Hooks
        // Movies
        nowPlaying,
        popular,
        upcoming,
        topRated,
        isLoadingMovie,
        // Series
        nowPlayingTV, 
        topRatedTV, 
        popularTV,
        isLoadingTV,
        //cats
        genresMovies,
        genresTV,
        isLoadingCat,
        //-- States
        credentials,
        genresHome,
        tendingMovie
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export {
  GlobalStateProvider,
  GlobalStateContext
}

// export default 