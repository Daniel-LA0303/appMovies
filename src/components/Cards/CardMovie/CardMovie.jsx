import React from "react";
import "./CardMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardMovie = ({ item }) => {
    const {poster_path, backdrop_path, title, release_date, overview,vote_average, genre_ids} = item
    const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>


      <div 
        className="movie_card my-5 mx-auto rounded"
        id="tomb"
        style={{ 
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundAttachment: 'fixed',
            backgroundSize: 800
            // height: au
        }}
      >
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={uriImage} 
            />
            <h1>{title}</h1>
            <h4>{release_date}</h4>
            <span className="minutes">125 min</span>
            <p className="type">{genre_ids}</p>
            <p className=" text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <span className="text-white ml-2">{vote_average}</span>
            </p>
          </div>
          <div className="movie_desc">
            <p className="text">
                {overview}
            </p>
          </div>
        </div>
        <div className="blur_back tomb_back"></div>
      </div>

      
    </>
  );
};

export default CardMovie;
