import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useGlobal from '../../hooks/useGlobal';

const FilterByCat = ({movies}) => {

    const {
      genresMovies,
      genresTV,
      catsFilter,
      setCatsFilter,
      selectedGenres,
      setSelectedGenres,
      //
      // catsFilterSerie,
      setCatsFilterSerie,
      selectedGenresSerie,
      setSelectedGenresSerie
    } = useGlobal();


    const [filter] = useAutoAnimate();
    
    const [openFilter, setOpenFilter] = useState(true);
    useEffect(() => { 
      setOpenFilter(true)
    }, [])

    const toggleGenreSelection = (id) => {
      if(movies){
        setSelectedGenres((prevSelectedGenres) =>
          prevSelectedGenres.includes(id)
            ? prevSelectedGenres.filter((genreId) => genreId !== id)
            : [...prevSelectedGenres, id]
        );
        setCatsFilter((prevSelectedGenres) =>
          prevSelectedGenres.includes(id)
            ? prevSelectedGenres.filter((genreId) => genreId !== id)
            : [...prevSelectedGenres, id]
        );
      }else{
        setSelectedGenresSerie((prevSelectedGenres) =>
          prevSelectedGenres.includes(id)
            ? prevSelectedGenres.filter((genreId) => genreId !== id)
            : [...prevSelectedGenres, id]
        );
        setCatsFilterSerie((prevSelectedGenres) =>
          prevSelectedGenres.includes(id)
            ? prevSelectedGenres.filter((genreId) => genreId !== id)
            : [...prevSelectedGenres, id]
        );
      }

    
    };
    
    
  return (
    <div
      ref={filter}
      className=" bg-zinc-800 rounded-md shadow-md px-4 py-2 mx-2 sm:mx-5 my-3"
    >
      <div className="flex justify-between items-center text-white py-1">
        <p className="text-lg">Filter</p>
        <button onClick={() => setOpenFilter((prev) => !prev)}>
          {openFilter && <FontAwesomeIcon icon={faChevronUp}  />}
          {!openFilter && <FontAwesomeIcon icon={faChevronDown}  />}
        </button>
      </div>
      {openFilter && (
        <div className="py-3 border-t border-dark-darken">
          <p className="text-lg mb-4 text-white/80">Genres</p>
            <ul
              className="flex gap-3 flex-wrap max-h-[200px] overflow-y-auto scroll"
            >
              {movies ?
                genresMovies.map((genre) => (
                  <li key={genre.id}>
                    <button
                      onClick={() => toggleGenreSelection(genre.id)}
                      className={`px-4 py-1 border border-violet-500 rounded-full hover:brightness-75 transition duration-300 inline-block 
                      ${        selectedGenres.includes(genre.id)
                        ? 'bg-violet-500 '
                        : ''}`
                      }
                    >
                      {genre.name}
                    </button>
                  </li>
                )) : (
                  genresTV.map((genre) => (
                    <li key={genre.id}>
                      <button
                        onClick={() => toggleGenreSelection(genre.id)}
                        className={`px-4 py-1 border border-violet-500 rounded-full hover:brightness-75 transition duration-300 inline-block 
                        ${        selectedGenresSerie.includes(genre.id)
                          ? 'bg-violet-500 '
                          : ''}
                        `
                      }
                      >
                        {genre.name}
                      </button>
                    </li>
                  ))
                )}
            </ul>
        </div>
      )}
    </div>
  )
}

export default FilterByCat