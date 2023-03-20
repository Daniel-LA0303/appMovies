import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const CardMovieSmall = ({ten}) => {
    const {poster_path, backdrop_path} = ten

    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <li className=' w-full my-5 flex flex-wrap text-sm'>
        <div className=' w-24'>
            <img src={uriImage} className='rounded'  alt="" />
        </div>
        <div className='ml-2 lg:ml-4'>
            <p className=' mb-3'>{ten.title}</p>
            <div className='mb-3'>
                <p className='border rounded-sm w-16 border-yellow-400 px-2'>
                    <FontAwesomeIcon 
                        icon={faStar} 
                        className=' text-yellow-400 mr-2'
                    />
                    <span className=''>{ten.vote_average}</span>
                </p>
            </div>
            <p>{ten.release_date}</p>
        </div>
    </li>
  )
}

export default CardMovieSmall