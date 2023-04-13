import React, { useEffect, useState } from "react";
import "./CardMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//hooks
import useGlobal from "../../../hooks/useGlobal";
import { resizeImage } from "../../../utils/utils";


const CardMovie = ({ item }) => {

  const { 
    catsFilter,
    setCatsFilter,
    selectedGenres,
    setSelectedGenres,
    //tabs,
    catsFilterSerie,
    setCatsFilterSerie,
    selectedGenresSerie,
    setSelectedGenresSerie,
} = useGlobal();

    const [genres, setGenres] = useState([])

    const route = useNavigate()
    const {credentials} = useGlobal()
    const uriImage = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    // console.log(item.id);

    useEffect(() => {
      const getDetails = async () => {
        let res;
        if (item.title) {
          res = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${credentials.api_key}&language=en-US`);
        } else if (item.name) {
          res = await axios.get(`https://api.themoviedb.org/3/tv/${item.id}?api_key=${credentials.api_key}&language=en-US`);
        }
    
        setGenres(res.data.genres);
      };
    
      getDetails();
    }, [item.id]);

    const directionPage = (id)=> {
      route(`/${item.title ? 'details-movie' : 'details-serie'}/${id}`)
    }

    const directionCat = (id)=> {
      if(item.title){
        setCatsFilter([...catsFilter, id])
        setSelectedGenres([...selectedGenres, id])
      }else{
        setCatsFilterSerie([...catsFilterSerie, id])
        setSelectedGenresSerie([...selectedGenresSerie, id])
      }



      route(`/${item.title ? 'movies' : 'series'}`)
    }

  return (
    <>
      <div 
        className="movie_card my-5 mx-auto rounded bg-cover"
        style={{ 
            backgroundImage: `url(${resizeImage(item.backdrop_path)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundAttachment: 'fixed',
        }}
      >
        <div className="info_section p-2 sm:p-5">
          <div className="movie_header flex">
            <div className="hidden sm:block">
              <img
                className="locandina cursor-pointer w-32 rounded"
                src={uriImage} 
                onClick={() => directionPage(item.id)}
              />
            </div>
            <div className="ml-2">
              <h1
                onClick={() => directionPage(item.id)}
                className='cursor-pointer text-violet-600  my-5 sm:my-0 text-lg sm:text-2xl font-bold'
              >{item.title ? item.title : item.name}</h1>
              <h4 className="mb-1">Relase Date: {item.release_date ? item.release_date : item.first_air_date}</h4>
              
              <ul className="hidden sm:flex flex-row flex-wrap text-xs">
                {genres.map(genre => (
                  
                    <li 
                      className="minutes mr-1 my-2 border px-2 py-1 rounded cursor-pointer"
                      key={genre.name}
                      onClick={() => directionCat(genre.id)}
                    >{genre.name}</li>
                ))}
              </ul>
              <p className=" text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <span className="text-white ml-2">{item.vote_average}</span>
              </p>
            </div>
          </div>
          <div className="movie_desc hidden sm:block mt-3 w-5/6 sm:w-3/6">
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
