import React, { createContext, useEffect, useState } from 'react'
import useCategories from '../hooks/useCategories'
import useMovies from '../hooks/useMovies'
import useTVShows from '../hooks/useTVShows'

const GlobalStateContext = createContext()

const GlobalStateProvider = ({children}) => {

  //Hooks
  const { nowPlaying, popular, upcoming, topRated, isLoadingMovie} = useMovies();
  const {nowPlayingTV, topRatedTV, popularTV, isLoadingTV} = useTVShows();
  const {isLoadingCat, genresMovies, genresTV} = useCategories()

  console.log(nowPlaying);
  
  return (
    <GlobalStateContext.Provider
      value={{
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
        isLoadingCat
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