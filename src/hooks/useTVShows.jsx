import React, { useEffect, useState } from 'react'
import { tvShowsAPITMDB } from '../api/movieAPITMDB';

const useTVShows = () => {

    const[isLoadingTV, setIsLoading] = useState(true);
    const [tvState, setTVState] = useState({
        nowPlayingTV: [],
        popularTV: [],
        topRatedTV: [],
    })

    const getTvShows = async () => {
        const nowPlayingPromise = tvShowsAPITMDB.get('/on_the_air')
        const popularPromise = tvShowsAPITMDB.get('/popular')
        const topRatedPromise = tvShowsAPITMDB.get('/top_rated')

        const res = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise
        ])

        setTVState({
            nowPlayingTV: res[0].data.results,
            popularTV: res[1].data.results,
            topRatedTV: res[2].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getTvShows()
    }, [])

  return {
    ...tvState,
    isLoadingTV,
  }
}
export default useTVShows