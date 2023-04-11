import React, { useEffect, useState } from 'react'
import useGlobal from '../../hooks/useGlobal';
import Spinner from '../../components/Spinner/Spinner';
import AsideFilter from '../../components/Aside/AsideFilter';
import Genres from '../../components/Cards/CardGenres/Genres';
import CardMT from '../../components/Cards/Card/CardMT';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

const Series = () => {
  const {
    isLoadingMovie,
    isLoadingCat,
    genresTV
  } = useGlobal();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const loadMoreMovies = async () => {
    if (page <= totalPages) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page + 1}`
      );
      const newMovies = response.data.results.filter((movie) => movie.poster_path !== null && movie.backdrop_path !== null);
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    fetchMovies();
  }, []);
  return (
    <>
    {(isLoadingCat || isLoadingMovie) ? (
        <Spinner />
    ) : (
    <div className='block sm:flex order-movies'>
        <aside className='w-full sm:w-4/12 my-3 text-white '>
            <AsideFilter />
        </aside>   
        <div className='w-full sm:w-8/12 order-last'>
            <div className='my-3'>  
              <div className='my-3 mx-2'>  
                <TransitionGroup className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                  {movies.map(item => (
                    <CSSTransition key={item.id} timeout={500} classNames="fade">
                      <CardMT item={item} />
                    </CSSTransition>
                  ))}
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

export default Series