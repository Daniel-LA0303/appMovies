import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import AsideFilter from '../../components/Aside/AsideFilter';
import useGlobal from '../../hooks/useGlobal';
import CardMT from '../../components/Cards/Card/CardMT';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Error404 from '../../components/Error/Error404';

const Movies = () => {

  const {
    isLoadingMovie,
    isLoadingCat,
    setFilterState,
    filterState,
    setCatsFilter,
    catsFilter
  } = useGlobal();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const loadMoreMovies = async () => {
    if (page <= totalPages) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filterState.value}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page + 1}`
      );
      const newMovies = response.data.results.filter((movie) => movie.poster_path !== null && movie.backdrop_path !== null);
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage(page + 1);
    }
  };

  useEffect(() => {

    fetchMovies();
    // console.log(filterState);
  }, [filterState]);

  useEffect(() => {
    if(catsFilter.length === 0){
      fetchMovies();
    }
    const filteredMovies = movies.filter(movie =>
      movie.genre_ids.some(genreId => catsFilter.includes(genreId))
    );
    setMovies(filteredMovies);
  }, [catsFilter])

  useEffect(() => {
    // setCatsFilter([])
    setFilterState({
      value: "popular",
      label: "Most Popular"
    })
  }, [])
  
  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filterState.value}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    );
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };
  return (
    <>
        {(isLoadingCat || isLoadingMovie) ? (
            <Spinner />
        ) : (
            <div className='block sm:flex order-movies'>
              <aside className='w-full sm:w-4/12 my-3 text-white '>
                  <AsideFilter 
                    movies={true}
                    sort={true}
                    cats={true}
                  />
              </aside>   
              <div className='w-full sm:w-8/12 order-last'>
                  <div className='my-3'>  
                  <p className='mx-2 text-2xl sm:text-3xl text-white'>Movies</p>
                    <div className='my-3 mx-2'>  
                      <TransitionGroup className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
                        { 
                          movies.map(item => (
                            <CSSTransition key={item.id} timeout={500} classNames="fade">
                              <CardMT item={item} />
                            </CSSTransition>
                          )) 
                        }
                      </TransitionGroup>
                    </div> 
                  </div> 
                  {page < totalPages && (
                    <div className="flex justify-center my-10">
                      <button 
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={loadMoreMovies}
                      >
                        Load More
                      </button>
                    </div>
                  )}
              </div>
            </div>
        )}
    </>
  )
}

export default Movies