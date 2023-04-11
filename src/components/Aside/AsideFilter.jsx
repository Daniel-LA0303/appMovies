import React from 'react'
import FilterByCat from '../Filter/FilterByCat'
import FilterByType from '../Filter/FilterByType'

const AsideFilter = ({movies, sort}) => {
  return (
    <div className='sticky top-5'>
        {sort && <FilterByType movies={movies}/>}
        <FilterByCat movies={movies}/>        
    </div>
  )
}

export default AsideFilter