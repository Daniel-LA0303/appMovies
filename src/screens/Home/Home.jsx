import React, { useEffect } from 'react'
import SliderBackdrop from '../../components/Slider/SliderBackdrop/SliderBackdrop';
//components
import Slider from '../../components/Slider/SliderPath/SliderPath'
import Spinner from '../../components/Spinner/Spinner';

//hooks
import useGlobal from '../../hooks/useGlobal';
const Home = () => {

    const {
        nowPlaying,
        popular,
        upcoming,
        topRated,
        isLoadingMovie,
        nowPlayingTV, 
        topRatedTV, 
        popularTV,
        isLoadingTV,
        isLoadingCat
    } = useGlobal();
    


  return (
    <>
        {(isLoadingCat || isLoadingMovie) ? (
            <Spinner />
        ) : (
            <>
                <div className='w-full sm:w-8/12 mx-auto'>
                    {/* <h1 className=' pl-8 font-light text-3xl'>En cines</h1> */}
                    <SliderBackdrop data={nowPlaying} />
                </div>
                <div className='w-full sm:w-8/12   sm:mx-auto text-white'>            
                    <div className=' my-10'>
                        <h1 className=' font-light text-3xl'>Populare</h1>
                        <Slider data={popular} delay={2500}/>
                    </div>
                    
                    <div className=' my-10'>
                        <h1 className=' font-light text-3xl'>Comming Soon</h1>
                        <Slider data={upcoming} delay={2700}/>
                    </div>
            
                    <div className=' my-10'>
                        <h1 className=' font-light text-3xl'>Top Rated</h1>
                        <Slider data={topRated} delay={3000}/>
                    </div>
            
                    <div className=' my-10'>
                        <h1 className='font-light text-3xl'>Top Rated TV</h1>
                        <Slider data={topRatedTV} delay={2500}/>
                    </div>
                    
                    <div className=' my-10'>
                        <h1 className='font-light text-3xl'>Popular TV shows</h1>
                        <Slider data={popularTV} delay={2700}/>
                    </div>
            
                    <div className=' my-10'>
                        <h1 className='font-light text-3xl'>Estrenadas</h1>
                        <Slider data={nowPlayingTV} delay={3000}/>
                    </div>
                    
                </div>  
            </>
        )}
    </>
    
  )
}

export default Home