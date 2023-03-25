import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGlobal from '../../hooks/useGlobal';
const Details = () => {

    const {id, details} = useParams();
    const {credentials} = useGlobal()

    const [detailsParam, setDetailsParam] = useState({});
    const [loading, setLoading] = useState(true)

    // console.log(details, id);

    useEffect(() => {
      const detailsParams = async () => {
        let res
        if(details == 'details-movie'){
          res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${credentials.api_key}&language=en-US`)
          // console.log(res);
        }else if(details == 'details-serie'){
          res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${credentials.api_key}&language=en-US`)
          // console.log(res);
        }
        setLoading(false)
        setDetailsParam(res.data);
        console.log(res);
      }

      detailsParams()
    }, [])
  return (
    <>
        {loading ? <Spinner/> : (

        <div>
            <p>MovieDetails</p>
            <p>{id}</p>
            <p>{details}</p>
        </div>
        )}
    </>
  )
}

export default Details