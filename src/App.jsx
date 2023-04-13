import { useState } from 'react'

import './App.css'

//dependencies
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

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
import { GlobalStateProvider } from './context/GlobalStateProvider';
import Details from './screens/Details/Details';
import CategoriesByParams from './screens/Categories/CategoriesByParams';
import SearchApp from './screens/Search/SearchApp';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import NoNavLayout from './components/Layout/NoNavLayout';


function App() {

  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>

              <Route path="movies" element={<Movies />} />
              {/* <Route path="movies-popular" element={<MoviesPopular />} /> */}
              {/* <Route path="movies-comming-soon" element={<MovieCommingSoon />} /> */}

              <Route path="/:details/:id" element={<Details />} />
              {/* <Route path="/categorie/:param/:id" element={<CategoriesByParams />} />               */}

              <Route path="series" element={<Series/>} />
              {/* <Route path="series-popular" element={<SeriesPopulare />} /> */}
              {/* <Route path="new-series" element={<SeriesNew />} /> */}

              <Route path="categories" element={<Categories />} />
              {/* <Route path="categories-movies" element={<CategoriesMovies />} /> */}
              {/* <Route path="categories-series" element={<CategoriesSeries />} /> */}

              <Route path="all/:param" element={<SearchApp />} />
{/* 
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} /> */}

            </Route>
            <Route path="login" element={<NoNavLayout><Login /></NoNavLayout>} />
            <Route path="register" element={<NoNavLayout><Register /></NoNavLayout>} />
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  )
}

export default App
