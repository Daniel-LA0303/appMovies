import React, { useEffect } from 'react'
import useMovies from '../../hooks/useMovies';
import Slider from '../../components/Slider/Slider'
import useTVShows from '../../hooks/useTVShows';
import useCategories from '../../hooks/useCategories';

const Home = () => {

    const { nowPlaying, popular, upcoming, topRated, isLoadingMovie} = useMovies();

    const {nowPlayingTV, topRatedTV, popularTV, isLoadingTV} = useTVShows();  
    
    const {isLoadingCat, genresMovies, genresTV} = useCategories()

    // console.log(genresTV , 'xd' , genresMovies);


  return (
    <div className=' w-full sm:w-5/6 lg:w-4/6 m-auto text-white'>
        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>En cines</h1>
            <Slider data={nowPlaying} delay={2000}/>
        </div>

        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Populare</h1>
            <Slider data={popular} delay={2500}/>
        </div>
        
        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Comming Soon</h1>
            <Slider data={upcoming} delay={2700}/>
        </div>

        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Top Rated</h1>
            <Slider data={topRated} delay={3000}/>
        </div>

        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Top Rated TV</h1>
            <Slider data={topRatedTV} delay={2500}/>
        </div>
        
        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Popular TV shows</h1>
            <Slider data={popularTV} delay={2700}/>
        </div>

        <div className=' my-10'>
            <h1 className=' pl-8 font-light text-3xl'>Estrenadas</h1>
            <Slider data={nowPlayingTV} delay={3000}/>
        </div>
        
    </div>
  )
}

export default Home