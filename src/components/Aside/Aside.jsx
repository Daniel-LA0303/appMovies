import React from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import CardMovieSmall from '../Cards/CardMovieSmall/CardMovieSmall';
import Categories from '../Categories/Categories'

const Aside = ({data, movies, title}) => {



  return (
    <>
        <div className=' flex flex-wrap'>
            {data.map(gen => (
                <Categories 
                    key={gen.id}
                    cat={gen}
                />
            ))}
        </div>
        <div className='border border-zinc-600 my-2'></div>
        <div className='flex justify-between items-center mt-5'>
            <p className=' text-lg'>{title}</p>
            <span>
                <FontAwesomeIcon icon={faEllipsisV} />
            </span>
            
        </div>
        
        <ul>
            {movies.map(ten => (
                <CardMovieSmall 
                    key={ten.id}
                    ten={ten}
                />
            ))}
        </ul>
        <button
            className=' w-full border py-2 rounded-3xl bg-violet-800 hover:bg-violet-600 transition-all duration-100 border-zinc-600'
        >See more</button>
    </>
  )
}

export default Aside