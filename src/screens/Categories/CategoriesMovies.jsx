import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import useGlobal from '../../hooks/useGlobal';
import Genres from '../../components/Cards/CardGenres/Genres';

const CategoriesMovies = () => {

  const {
    isLoadingMovie,
    isLoadingCat,
    genresMovies
  } = useGlobal();

  return (
    <>
        {(isLoadingCat || isLoadingMovie) ? (
            <Spinner />
        ) : (
                <div className='my-3 mx-2'>  
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                    {genresMovies.map(item => (
                      <Genres 
                        key={item.id}
                        item={item}
                        movies={true}
                      />
                    ))}
                  </div>
                </div> 
        )}
    </>
  )
}

export default CategoriesMovies