import React, { useEffect } from 'react'
import movieAPITMDB from '../../api/movieAPITMDB';
import useMovies from '../../hooks/useMovies';
import Slider from '../Slider/Slider'

const Home = () => {

    const { nowPlaying, popular, upcoming,topRated, isLoading} = useMovies();

    

    console.log(popular);


  return (
    <div className=' w-full sm:w-5/6 lg:w-4/6 m-auto text-white'>
        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>En cines</h1>
            <Slider data={nowPlaying} delay={2000}/>
        </div>

        <div className=' mt-10'>
            <h1 className=' pl-8 font-light text-3xl'>Populares</h1>
            <Slider data={popular} delay={3000}/>
        </div>
        
    </div>
  )
}

export default Home