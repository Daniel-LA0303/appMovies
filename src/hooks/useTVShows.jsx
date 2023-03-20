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

        const newNowPlayingTv = res[0].data.results.filter(result => result.backdrop_path !== null && result.backdrop_path !== '' && result.poster_path !== null);
        const newPopularTv = res[1].data.results.filter(result => result.backdrop_path !== null && result.backdrop_path !== '' && result.poster_path !== null);
        const newTopRatedTv = res[2].data.results.filter(result => result.backdrop_path !== null && result.backdrop_path !== '' && result.poster_path !== null);
        setTVState({
            nowPlayingTV: newNowPlayingTv,
            popularTV: newPopularTv,
            topRatedTV: newTopRatedTv,
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