import React from 'react'
import useGlobal from '../../hooks/useGlobal';
import Genres from '../Cards/CardGenres/Genres';

const TabsCats = () => {

    const {
        genresMovies,
        genresTV,
        tabs,
        setTabs
    } = useGlobal();
    
  return (
        <div className="warpper">
            <input className="radio" id="one" name="group" type="radio"  onChange={() => setTabs(!tabs)} defaultChecked={tabs}/>
            <input className="radio" id="two" name="group" type="radio" onChange={() => setTabs(!tabs)} defaultChecked={!tabs}
             
            />
            {/* <input className="radio" id="three" name="group" type="radio" /> */}
            <div className="tabs">
                <label className="tab" id="one-tab" htmlFor="one"
                    onClick={() => setTabs(false)} 
                >
                    Movies
                </label>
                <label className="tab" id="two-tab" htmlFor="two"
                    onClick={() => setTabs(true)}
                >
                    Tv Shows
                </label>
            </div>
            <div className="panels">
                <div className="panel" id="one-panel">
                    <div className='w-full sm:mx-auto text-white'>            
                        <div className=' mt-10 mb-2'>
                            <h1 className=' font-light text-3xl'>Populare</h1>
      
                        </div>
                            
                        <div className='my-3'>  
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                                {genresMovies.map(item => (
                                <Genres 
                                    key={item.id}
                                    item={item}
                                    movies={true}
                                />
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="panel" id="two-panel">
                    {/* <div className="panel-title">Take-Away Skills</div> */}
                    <div className='w-full'>
                    </div>
                    <div className='mt-10 mb-2'>
                        <h1 className='font-light text-3xl'>Top Rated TV</h1>
                    </div>
                        
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                        {genresTV.map(item => (
                            <Genres 
                                key={item.id}
                                item={item}
                                movies={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TabsCats