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
  const [genresHomeMovies, setGenresHomeMovies] = useState([])
  const [genresHomeTV, setGenresHomeTV] = useState([])
  const [tendingMovie, setTendingMovie] = useState([]);
  const [tendingTV, setTendingTV] = useState([])
  const [tabs, setTabs] = useState(true) //true = movies, false = tv

  //Hooks
  const { nowPlaying, popular, upcoming, topRated, isLoadingMovie} = useMovies();
  const {nowPlayingTV, topRatedTV, popularTV, isLoadingTV} = useTVShows();
  const {isLoadingCat, genresMovies, genresTV} = useCategories();


  useEffect(() => {
    const newElements = genresMovies.slice(0, 8);
    setGenresHomeMovies(newElements);
  }, [genresMovies])

  useEffect(() => {
    const newElements = genresMovies.slice(0, 5);
    setGenresHomeTV(newElements);
  }, [genresTV])

  useEffect(() => {
    const tending = popular.slice(0, 3)
    setTendingMovie(tending)
  }, [popular])

  useEffect(() => {
    const tending = popularTV.slice(0, 3)
    setTendingTV(tending)

  }, [popularTV])
  
  


  // console.log(tendingTV);
  
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
        genresHomeMovies,
        genresHomeTV,
        tendingMovie,
        tendingTV,
        setTabs,
        tabs
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