import React, { useState } from 'react'
import './CardSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CardSearch = ({result}) => {
    const route = useNavigate();
    const [details, setDetails] = useState(false)

    const {poster_path, vote_average} = result
    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const navi = () => {
        route(result.name ? `/${'details-series'}/${result.id}` : `/${'details-movie'}/${result.id}`)
    }

    const normalizeNumber = (num) => {
        const normalized = Math.floor(num * 10) / 10; // redondea a un decimal y recorta
        return normalized.toFixed(1); // convierte el número a un string con un decimal
      }
      
  return (
    <div 
        className=' cursor-pointer card'
        onClick={() => navi()}
    >
        <div className='relative'>
            <div className=' absolute text-sm top-2 left-2 bg-zinc-700 text-white px-2 rounded-xl'>
                <p className="">
                    <FontAwesomeIcon icon={faStar} />
                    <span className=" ml-2">{normalizeNumber(vote_average)}</span>
                </p>
            </div>
            <div className=' w-full mx-auto'>
                <img className='img'  src={uriImage} />
            </div>
            <p className=' overflow-hidden py-4 text-white text-xs'>{result.name ? result.name : result.title}</p>    
        </div>
    </div>
  )
}

export default CardSearch