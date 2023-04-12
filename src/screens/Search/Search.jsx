import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardSearch from '../../components/Cards/CardSearch/CardSearch';
import Aside from '../../components/Aside/Aside';
import useGlobal from '../../hooks/useGlobal';

const Search = () => {

    const {
        isLoadingMovie,
        isLoadingCat,
        setFilterState,
        filterState,
        setCatsFilter,
        genresMovies,
        genresTV,
        genresHomeTV,
        genresHomeMovies, 
        tendingMovie
      } = useGlobal();

    const [searchResults, setSearchResults] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    const [page, setPage] = useState(1);
    const { param } = useParams();
    
    useEffect(() => {
      const fetchSearchResults = async () => {
        try {
          const responseMovies = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${param}&page=${page}&include_adult=false`
          );
          const responseTV = await axios.get(
            `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${param}&page=${page}&include_adult=false`
          );
          const movies = responseMovies.data.results.filter((movie) => movie.poster_path !== null);
          const tvShows = responseTV.data.results.filter((show) => show.poster_path !== null);
          const searchResults = [...movies, ...tvShows];
          setSearchResults(prevResults => {
            if (page === 1) {
              return searchResults;
            } else {
              return [...prevResults, ...searchResults];
            }
          });
        //   console.log(searchResults);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSearchResults();
    }, [param, page]);
  
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setPage((prevPage) => prevPage + 1);
          }
        }, { threshold: 0.1 });
      
        // Verificar que no se hayan cargado ya todos los resultados
        if (searchResults2.length === 0 && searchResults.length > 0) {
          intersectionObserver.observe(document.querySelector('#intersectionObserver'));
        }
      
        return () => intersectionObserver.disconnect();
      }, [searchResults, searchResults2]);

  return (
    <div>
        <div className='block sm:flex order-movies'>
            <aside className='w-full  sm:w-4/12 my-3 text-white px-3  sm:px-0 sm:mx-5'>
                <Aside 
                    data={param === 'movie' ? genresHomeMovies : genresHomeTV }
                    movies={ tendingMovie}
                    title='Tending'
                />
            </aside>   
            <div className='w-full order-last mx-0 sm:mx-7 '>
                <div className='my-3'>  
                    <div className='my-3 mx-2'>  
                        <TransitionGroup className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4">
                                {searchResults.map((result) => (
                                    <CSSTransition key={result.id} timeout={500} classNames="fade">
                                        <CardSearch result={result} />
                                    </CSSTransition>
                                ))}
                            {searchResults2.length > 0 &&
                                <>
                                {searchResults2.map((result) => (
                                    <CSSTransition key={result.id} timeout={500} classNames="fade">
                                        <CardSearch result={result} />
                                    </CSSTransition>
                                ))}
                                </>
                            }
                        </TransitionGroup>
                    </div> 
                </div> 
                    
            </div>
        </div>


      <div id="intersectionObserver" />
    </div>
  )
}

export default Search