import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesByParamsMovie = () => {

  const {id} = useParams();

  return (
    <div>
      <p>CategoriesByParamsMovie</p>
      <p>{id}</p>
    </div>
  )
}

export default CategoriesByParamsMovie