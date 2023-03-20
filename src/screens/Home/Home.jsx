import React, { } from 'react'
import Aside from '../../components/Aside/Aside';
import FilterByCat from '../../components/Filter/FilterByCat';
import SliderBackdrop from '../../components/Slider/SliderBackdrop/SliderBackdrop';
//components
import Slider from '../../components/Slider/SliderPath/SliderPath'
import Spinner from '../../components/Spinner/Spinner';
import Tabs from '../../components/Tabs/Tabs';

//hooks
import useGlobal from '../../hooks/useGlobal';

const Home = () => {

    const {
        isLoadingMovie,
        isLoadingCat,
        genresHomeMovies,
        genresHomeTV,
        tendingMovie,
        tendingTV, 
        tabs

    } = useGlobal();
    

  return (
    <>
        {(isLoadingCat || isLoadingMovie) ? (
            <Spinner />
        ) : (
            <div className='flex justify-center w-full '>
                
                <div className='w-full md:w-8/12 mx-5'>
                    <div className='mx-2 sm:mx-0 mt-3'>
                        <FilterByCat />
                    </div>
                    <div className=' mx-2 sm:mx-0 mt-3'>
                        <Tabs />
                    </div> 
                </div>
                {/* Se convertira a componente */}
                <aside className='hidden md:block w-4/12 my-5 mx-5 text-white '>
                    <Aside 
                        data={tabs ? genresHomeTV : genresHomeMovies}
                        movies={tabs ? tendingTV : tendingMovie}
                        title='Tending'
                    />
                </aside>
                
            </div>
        )}
    </>
    
  )
}

export default Home