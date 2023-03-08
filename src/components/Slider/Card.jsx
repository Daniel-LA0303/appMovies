import React from 'react'
import "./Card.css"



const Card = ({item}) => {
    
    const {poster_path} = item
    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (  
        <div className='card'>
            <div className='c_img'>
                <img className='img' src={uriImage} 
                    // style={{margin:'200px'}}
                    />
            </div>
            
            {/* <div className='data'>
                <p>{nombre}</p>
                <div className='description'>
                    <p>{precio}</p>
                    <p>{categoriaId}</p>
                </div>
            </div> */}
        </div>
    );
}
 
export default Card;