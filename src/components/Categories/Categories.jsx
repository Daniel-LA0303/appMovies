import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobal from '../../hooks/useGlobal';

const Categories = ({cat}) => {

  const route = useNavigate()

  const { 
    catsFilter,
    setCatsFilter,
    tabs,
    selectedGenres,
    setSelectedGenres
} = useGlobal();

const directionCat = (id)=> {
  setCatsFilter([...catsFilter, id])
  setSelectedGenres([...selectedGenres, id])
  // setTimeout(() => {
    route(`/${tabs ? 'movies' : 'series' }`)
  // }, 3000);
  
  
}


  return (
    <div className='mr-2 my-1 bg-violet-600 py-2 px-4 rounded-xl'>
        <p onClick={() => directionCat(cat.id)} className=' text-sm cursor-pointer'>{cat.name}</p>
    </div>
  )
}

export default Categories