import React from 'react'
import { useParams } from 'react-router-dom';

const CategoriesByParamsSeries = () => {

  const {id} = useParams();

  return (
    <div>
      <p>CategoriesByParamsSeries</p>
      <p>{id}</p>
    </div>
  )
}

export default CategoriesByParamsSeries