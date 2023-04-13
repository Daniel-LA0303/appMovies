import React from 'react'
import { faBatteryEmpty, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import CardMovieSmall from '../Cards/CardMovieSmall/CardMovieSmall';
import Categories from '../Categories/Categories'
import { Link } from 'react-router-dom';

const Aside = ({data, movies, title}) => {


  return (
    <>
    {movies.length > 0 ?  (
        <div className='sticky top-5 hidden sm:block '>
        <div className=' flex flex-wrap'>
            {data ? 
                data.map(gen => (
                    <Categories 
                        key={gen.id}
                        cat={gen}
                    />
                ))
                : null
            }
        </div>
        <div className='border border-zinc-600 my-2'></div>
        <div className='flex justify-between items-center mt-5'>
            <p className=' text-lg'>{title}</p>
            <span>
                <FontAwesomeIcon icon={faEllipsisV} />
            </span>
            
        </div>
        
        <ul className='hidden sm:block'>
            {movies.map(ten => (
                <CardMovieSmall 
                    key={ten.id}
                    ten={ten}
                />
            ))}
        </ul>


        <Link
            to={movies[0].title ? '/movies' : '/series'}
            className='hidden sm:w-full sm:block text-center  border py-2 rounded-3xl bg-violet-800 hover:bg-violet-600 transition-all duration-100 border-zinc-600'
        >See more</Link>
    </div>
    ) : <>
            <div className='sticky top-5 hidden sm:block '>
            {/* <span>
                <FontAwesomeIcon icon={faBatteryEmpty} />
            </span> */}
                <p className='text-center mt-5'>No data</p>
            </div>
        </> 
    }
    </>
    
  )
}

export default Aside