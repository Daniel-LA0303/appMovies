import React, { useEffect, useState } from "react";
import "./CardMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//hooks
import useGlobal from "../../../hooks/useGlobal";


const CardMovie = ({ item }) => {

    const [genres, setGenres] = useState([])
    // const [runtime, setRuntime] = useState('')

    const route = useNavigate()
    const {credentials} = useGlobal()
    const {poster_path, backdrop_path, title, release_date, overview,vote_average, genre_ids, id} = item
    const uriImage = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    useEffect(() => {
      const getDeatils = async () => {
        let res
        if(item.title){
          res = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${credentials.api_key}&language=en-US`)
        }else if(item.name){
          res = await axios.get(`https://api.themoviedb.org/3/tv/${item.id}?api_key=${credentials.api_key}&language=en-US`)
        }
        
        setGenres(res.data.genres);
      }

      getDeatils()

    }, [])

    const directionMovie = (id)=> {
      route(`/movies-details/${id}`)
    }

    const directionGenre = (name) => {
      route(`/categories/movies/${name}`)
    }

  return (
    <>
      <div 
        className="movie_card my-5 mx-auto rounded "
        // onClick={() => directionMovie(id)}
        id="tomb"
        style={{ 
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundAttachment: 'fixed',
            backgroundSize: 800
            // height: au
        }}
      >
        <div className="info_section">
          <div className="movie_header flex">
            <div>
              <img
                className="locandina cursor-pointer "
                src={uriImage} 
                onClick={() => directionMovie(item.id)}
              />
            </div>
            <div className="ml-2">
              <h1
                onClick={() => directionMovie(id)}
                className='cursor-pointer text-violet-600 text-lg sm:text-2xl font-bold'
              >{item.title ? item.title : item.name}</h1>
              <h4 className="mb-1">Relase Date: {item.release_date ? item.release_date : item.first_air_date}</h4>
              {item.runtime && (
                <span className="minutes mb-1">{item.runtime} min</span>
              )}
              
              <div className="flex flex-row flex-wrap text-xs">
                {genres.map(genre => (
                  
                    <p 
                      className="minutes mr-1 my-2"
                      key={genre.name}
                    >{genre.name}</p>
                ))}
              </div>
              <p className=" text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <span className="text-white ml-2">{item.vote_average}</span>
              </p>
            </div>
          </div>
          <div className="movie_desc mt-3">
            <p className="text text-xs">
                {item.overview}
            </p>
          </div>
        </div>
        <div className="blur_back tomb_back"></div>
      </div>

      
    </>
  );
};

export default CardMovie;
