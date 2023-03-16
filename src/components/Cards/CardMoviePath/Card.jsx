import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"



const Card = ({item}) => {
    
    const route = useNavigate();

    const {poster_path, backdrop_path} = item
    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const navi = () => {
        route(`/movies-details/${item.id}`)
    }

    return (  
        <div 
            className=' cursor-pointer'
            onClick={() => navi()}
        >
            <div className=''>
            
                <img className='img' src={uriImage} 
                    // style={{margin:'200px'}}
                />
                <p className=' overflow-hidden py-4'>{item.title}</p>    
            </div>
        </div>
    );
}
 
export default Card;