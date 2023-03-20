import React, { } from 'react'
import Aside from '../../components/Aside/Aside';
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
        isLoadingCat,
        genresHome,
        tendingMovie
    } = useGlobal();
    

  return (
    <>
        {(isLoadingCat || isLoadingMovie) ? (
            <Spinner />
        ) : (
            <div className='flex justify-center w-full '>
                
                <div className='w-full md:w-8/12 mx-5'>
                    <div className='w-full'>
                        <SliderBackdrop data={nowPlaying} />
                    </div>
                    <div className='w-full sm:mx-auto text-white'>            
                        <div className=' mt-10 mb-5'>
                            <h1 className=' font-light text-3xl'>Populare</h1>
                            <Slider data={popular} delay={2500} series={false}/>
                        </div>
                        
                        <div className=' mb-5'>
                            <h1 className=' font-light text-3xl'>Comming Soon</h1>
                            <Slider data={upcoming} delay={2700} series={false}/>
                        </div>
                
                        <div className=' mb-5'>
                            <h1 className=' font-light text-3xl'>Top Rated</h1>
                            <Slider data={topRated} delay={3000} series={false}/>
                        </div>
{/*                 
                        <div className=' my-10'>
                            <h1 className='font-light text-3xl'>Top Rated TV</h1>
                            <Slider data={topRatedTV} delay={2500} series={true}/>
                        </div>
                        
                        <div className=' my-10'>
                            <h1 className='font-light text-3xl'>Popular TV shows</h1>
                            <Slider data={popularTV} delay={2700} series={true}/>
                        </div>
                
                        <div className=' my-10'>
                            <h1 className='font-light text-3xl'>Estrenadas</h1>
                            <Slider data={nowPlayingTV} delay={3000} series={true}/>
                        </div> */}
                        
                    </div>  

                </div>
                {/* Se convertira a componente */}
                <aside className='hidden md:block w-4/12 my-5 mx-5 text-white '>
                    <Aside 
                        data={genresHome}
                        movies={tendingMovie}
                        title='Tending'
                    />
                </aside>
                
            </div>
        )}
    </>
    
  )
}

export default Home