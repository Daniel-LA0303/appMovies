import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Genres = ({item, movies}) => {
  return (
    <div class="bg-zinc-700 rounded-md shadow-md  hover:transform hover:scale-95 transition duration-500">
        <div class="h-20 flex items-center justify-center">
            <FontAwesomeIcon icon={movies ? faFilm : faTv} className='text-6xl text-white'/>
        </div>
        <div class="p-2 flex flex-col">
            <h1 class="text-lg text-white mb-2 text-center">{item.name}</h1>
            <Link to={movies ? `/categorie/movie/${item.name}` : `/categorie/serie/${item.name}`} class=" text-center inline-block bg-violet-800 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
                Show more
            </Link>
        </div>
  </div>
  )
}

export default Genres