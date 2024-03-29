import React, { useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'
import "./Card.css"



const Card = ({item, series}) => {
    
    const route = useNavigate();
    const [details, setDetails] = useState(false)

    const {poster_path, vote_average} = item
    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const navi = () => {
        route(series ? `/${'details-series'}/${item.id}` : `/${'details-movie'}/${item.id}`)
    }

    return (  
        <div 
            className=' cursor-pointer'
            onClick={() => navi()}
        >
            <div className=''>
                <div className=' absolute text-sm top-2 left-2 bg-zinc-700 text-white px-2 rounded-xl'>
                    <p className="">
                        <FontAwesomeIcon icon={faStar} />
                        <span className=" ml-2">{vote_average}</span>
                    </p>
                </div>
                <img className='img' src={uriImage} />
                <p className=' overflow-hidden py-4'>{series ? item.name : item.title}</p>    
            </div>
        </div>
    );
}
 
export default Card;