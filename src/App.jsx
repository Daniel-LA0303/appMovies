import { useState } from 'react'

import './App.css'

//dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Screen
import Layout from './components/Layout/Layout';
import Home from './screens/Home/Home';
import MoviesPopular from './screens/Movies/MoviesPopular';
import MovieCommingSoon from './screens/Movies/MovieCommingSoon';
import SeriesPopulare from './screens/Series/SeriesPopulare';
import SeriesNew from './screens/Series/SeriesNew';
import Movies from './screens/Movies/Movies';
import Series from './screens/Series/Series';
import Categories from './screens/Categories/Categories';
import CategoriesMovies from './screens/Categories/CategoriesMovies';
import CategoriesSeries from './screens/Categories/CategoriesSeries';
import CategoriesByParamsMovie from './screens/Categories/CategoriesByParamsMovie';
import CategoriesByParamsSeries from './screens/Categories/CategoriesByParamsSeries';
import { GlobalStateProvider } from './context/GlobalStateProvider';
import MovieDetails from './screens/Details/MovieDetails';


function App() {

  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>

              <Route path="movies" element={<Movies />} />
              <Route path="movies-popular" element={<MoviesPopular />} />
              <Route path="movies-comming-soon" element={<MovieCommingSoon />} />
              <Route path="movies-details/:id" element={<MovieDetails />} />

              <Route path="series" element={<Series/>} />
              <Route path="series-popular" element={<SeriesPopulare />} />
              <Route path="new-series" element={<SeriesNew />} />
              <Route path="series-details/:id" element={<SeriesNew />} />

              <Route path="categories" element={<Categories />} />
              <Route path="categories-movies" element={<CategoriesMovies />} />
              <Route path="categories-series" element={<CategoriesSeries />} />

              <Route path="categories/movies/:id" element={<CategoriesByParamsMovie />} />
              <Route path="categories/series/:id" element={<CategoriesByParamsSeries />} />

            </Route>
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  )
}

export default App
