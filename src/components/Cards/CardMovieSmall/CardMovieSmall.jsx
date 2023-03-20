import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const CardMovieSmall = ({ten}) => {
    const {poster_path} = ten

    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <li className=' w-full my-5 flex flex-wrap text-sm'>
        <div className=' w-24'>
            <img src={uriImage} className='rounded'  alt="" />
        </div>
        <div className='ml-2 lg:ml-4'>
            <p className=' mb-3'>{ten.title ? ten.title : ten.name}</p>
            <div className='mb-3'>
                <p className='border-2 rounded-sm w-16 border-zinc-700 px-2'>
                    <FontAwesomeIcon 
                        icon={faStar} 
                        className=' mr-2'
                    />
                    <span className=''>{ten.vote_average}</span>
                </p>
            </div>
            <p>{ten.release_date ? ten.release_date : ten.first_air_date}</p>
        </div>
    </li>
  )
}

export default CardMovieSmall