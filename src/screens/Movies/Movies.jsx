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
    catsFilter,
    setSelectedGenres
  } = useGlobal();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    setCatsFilter([])
    setSelectedGenres([])
  }, [])

  const loadMoreMovies = async () => {
    console.log('entro');
    if (page < totalPages ) {
      console.log('entro2');
      setIsFetching(true);
      let response = null;
      if (catsFilter.length === 0) {
        response = await axios.get(
          `https://api.themoviedb.org/3/movie/${filterState.value}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page + 1}`
        );
      } else {
        response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${filterState.value}&include_adult=false&include_video=false&page=${page + 1}&with_genres=${catsFilter.join(',')}`
        );
      }
      const newMovies = response.data.results.filter((movie) => movie.poster_path !== null && movie.backdrop_path !== null);
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage(page + 1);
      setIsFetching(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  
  useEffect(() => {
    loadMoreMovies();
  }, [isFetching]);
  

  const fetchFilteredMoviesByCategoryAndSort = async (categories, sort) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&with_genres=${categories.join(',')}`
    );
    return response.data.results;
  };

  useEffect(() => {
    fetchMovies();
  }, [filterState]);

  useEffect(() => {
    // setMovies([]);
    const fetchFilteredMovies = async () => {
      let filteredMovies = [];
      if (catsFilter.length === 0) {
        filteredMovies = await fetchMovies();
      } else {
        filteredMovies = await fetchFilteredMoviesByCategoryAndSort(catsFilter, filterState.value);
      }
      const newMovies = filteredMovies.filter((movie) => movie.poster_path !== null && movie.backdrop_path !== null);
      setMovies(newMovies);
    };
    fetchFilteredMovies();
    window.scrollTo(0, 0); 
  }, [catsFilter, filterState]);

  useEffect(() => {
    setFilterState({
      value: "popular",
      label: "Most Popular"
    })
  }, [])

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const visibleHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visibleHeight + scrollY >= pageHeight;
  
    if (bottomOfPage && !isFetching) {
      console.log('load more movies');
      setIsFetching(true);
    }
    // console.log('scrolling'); // Agregar este console.log
    // console.log(totalPages);
  };
  

  // useEffect(() => {
  //   if (isFetching) {
  //     loadMoreMovies();
  //   }
  // }, [isFetching]);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filterState.value}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    );
    setTotalPages(response.data.total_pages || 1);
    return response.data.results;
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
                        // movies.length === 0 ? <p className='text-white text-xl'>There were no results</p> : (

                        
                          movies.map(item => (
                            <CSSTransition key={item.id} timeout={500} classNames="fade">
                              <CardMT item={item} />
                            </CSSTransition>
                          )) 
                          // )
                        }
                      </TransitionGroup>
                    </div> 
                  </div> 
              </div>
            </div>
        )}
    </>
  )
}

export default Movies