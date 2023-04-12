import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import useGlobal from '../../hooks/useGlobal';
import AsideFilter from '../../components/Aside/AsideFilter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardMT from '../../components/Cards/Card/CardMT';
import axios from 'axios';
import Aside from '../../components/Aside/Aside';

const CategoriesByParams = () => {

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

  const {id, param} = useParams();

  // console.log(id, param);
  // let categoryId;

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${param === 'movie' ? 'movie' : 'tv'}/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
    );
    const filteredResults = response.data.results.filter((movie) => movie.poster_path !== null);
    setMovies((prevMovies) => [...prevMovies, ...filteredResults]);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const genre = (param === "movie") ? genresMovies.find((g) => g.name.toLowerCase() === id.toLowerCase()) : genresTV.find((g) => g.name.toLowerCase() === id.toLowerCase());
  const genreId = genre ? genre.id : null;

const fetchMoviesByGenre = async (genreId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/${param === 'movie' ? 'movie' : 'tv'}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}&with_genres=${genreId}`
  );
  setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
  setTotalPages(response.data.total_pages);
};

useEffect(() => {
  if (genreId) {
    fetchMoviesByGenre(genreId);
  } else {
    fetchMovies();
  }
}, [genreId, page]);

useEffect(() => {
  setMovies([]);
  setPage(1);
}, [id]);

  
  return (
    <>
        {(isLoadingCat || isLoadingMovie || !id) ? (
            <Spinner />
        ) : (
            <div className='block sm:flex order-movies'>
              <aside className='w-full sm:w-4/12 my-3 text-white mx-5'>
                  <Aside 
                        data={param === 'movie' ? genresHomeMovies : genresHomeTV }
                        movies={ tendingMovie}
                        title='Tending'
                  />
              </aside>   
              <div className='w-full order-last mx-7'>
                  <div className='my-3'>  
                  <p className='mx-2 text-2xl sm:text-3xl text-white'>{id}</p>
                    <div className='my-3 mx-2'>  
                      <TransitionGroup className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4">
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
                  {page < totalPages && <div>Loading more movies...</div>}
              </div>
            </div>
        )}
    </>
  )
}

export default CategoriesByParams