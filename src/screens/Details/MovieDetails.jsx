import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

    const {id} = useParams();

  return (
    <div>
        <p>MovieDetails</p>
        <p>{id}</p>
    </div>
  )
}

export default MovieDetails