import React, { createContext, useEffect, useState } from 'react'
import useMovies from '../hooks/useMovies'
import useTVShows from '../hooks/useTVShows'

const GlobalStateContext = createContext()

const GlobalStateProvider = ({children}) => {

  const { nowPlaying, popular, upcoming, topRated, isLoadingMovie} = useMovies();
  const {nowPlayingTV, topRatedTV, popularTV, isLoadingTV} = useTVShows(); 
  
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
        isLoadingTV
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