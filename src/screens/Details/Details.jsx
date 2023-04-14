import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGlobal from '../../hooks/useGlobal';
import { resizeImage } from '../../utils/utils';
import Aside from '../../components/Aside/Aside';
import TabsDetails from '../../components/Tabs/TabsDetails';
import ProgressBar from './ProgressBar';
import Footer from '../../components/Layout/Footer';
const Details = () => {

  
    const {
        genresHomeMovies,
        genresHomeTV,
        tendingMovie,
        tabs,
        catsFilter,
        setCatsFilter,
        selectedGenres,
        setSelectedGenres,
        setCatsFilterSerie,
        selectedGenresSerie,
        setSelectedGenresSerie,
        credentials
    } = useGlobal();

    const route = useNavigate()
    const {id, details} = useParams();

    const [detailsParam, setDetailsParam] = useState({});
    const [credits, setCredits] =useState({})
    const [reviews, setReviews] = useState({})
    const [videos, setVideos] = useState({})
    const [similar, setSimilar] = useState({})
    const [loading, setLoading] = useState(true)
    const [catsDir, setCatsDir] = useState([])

    const elem = useRef(null);

    // const uriImage = `https://image.tmdb.org/t/p/original${detailsParam.backdrop_path}`;


    useEffect(() => {
      const detailsParams = async () => {
        let info, credits, reviews, videos, similar

        if(details == 'details-movie'){
          info = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${credentials.api_key}&language=en-US`)
          credits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${credentials.api_key}&language=en-US`)
          reviews = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${credentials.api_key}&language=en-US&page=1`)
          videos = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${credentials.api_key}`)
          similar = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${credentials.api_key}`)
        }else {
          info = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${credentials.api_key}&language=en-US`)
          credits = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${credentials.api_key}&language=en-US`)
          reviews = await axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${credentials.api_key}&language=en-US&page=1`)
          videos = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${credentials.api_key}`)
          similar = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${credentials.api_key}`)
        }
        

        const res = await Promise.all([
          info,
          credits,
          reviews,
          videos,
          similar
        ])
        setLoading(false)
        const newCreditsRe = res[1].data.cast;
        const newCredits = newCreditsRe.filter(movie => movie.profile_path).slice(0, 8);
        setCredits(newCredits)
        setDetailsParam(res[0].data);
        setReviews(res[2].data)
        setVideos(res[3].data)
        const newSimilarRe = res[4].data.results;
        const newSimilar = newSimilarRe.filter(movie => movie.poster_path && movie.backdrop_path).slice(0, 3);
        setSimilar(newSimilar)
      }

      detailsParams()
    }, [id])

    useEffect(() => {
      if(detailsParam.title){
        setCatsFilter([])
        setSelectedGenres([])
      }else{
        setCatsFilterSerie([])
        setSelectedGenresSerie([])
      }

    }, [detailsParam.title])
    

    const handleImageLoad = () => {
      setLoading(false);
    };

    const directionCat = (id)=> {
      if(detailsParam.title){
        setCatsFilter([...catsDir, id])
        setSelectedGenres([...selectedGenres, id])
      }else{
        setCatsFilterSerie([...catsDir, id])
        setSelectedGenresSerie([...selectedGenresSerie, id])
      }
      
      // setTimeout(() => {
        route(`/${detailsParam.title ? 'movies' : 'series' }`)
      // }, 3000)
      
    }
    
    

  return (
    <>
        {loading ? <Spinner/> : (
          <>
            <div className='flex justify-center w-full details' >
              <div className='w-full md:w-10/12 mx-0'>
                  <div
                      style={{
                        backgroundImage: `url(${resizeImage(detailsParam.backdrop_path)})`,
                      }}
                      className="bg-cover bg-center bg-no-repeat md:h-[400px] h-[300px] rounded-bl-2xl relative"
                  >
                    <div className="bg-gradient-to-br from-transparent to-black/70 h-full rounded-bl-2xl">
                      <div className="flex flex-col md:flex-row bottom-[-85%] md:bottom-[-20%]  items-start absolute left-1/2 -translate-x-1/2  w-full max-w-[1000px] ">
                        <div className="flex gap-5 items-center">
                          <div className="shrink-0 w-[185px] ml-3 md:ml-0">
                            <img
                                src={resizeImage(detailsParam.poster_path)}
                                className="w-full h-full object-cover rounded-md"
                                alt="Poster"
                                onLoad={handleImageLoad}
                            />
                          </div>
                        </div>

                        <div className="flex-grow md:ml-14 ml-5 mt-6 md:mt-0">
                          <div className="md:h-28 flex items-end">
                            <h1 className=" text-white text-3xl sm:text-[45px] font-light leading-tight ">
                              {detailsParam.title || detailsParam.name}
                            </h1>
                          </div>
                          <ul className="flex gap-3 flex-wrap md:mt-7 mt-3">
                            {detailsParam.genres.slice(0, 3).map((genre) => (
                              <li key={genre.id} className="mb-3">
                                <button
                                  onClick={() => directionCat(genre.id)}
                                  className="md:px-5 px-3 md:py-2 py-1 rounded-full uppercase font-medium border-2 border-violet-500 border-solid text-white hover:bg-violet-500 transition duration-300"
                                >
                                  {genre.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-3 absolute top-[5%] right-[3%]">
                      </div>
                    </div>
                  </div>
                  <div className='block md:flex justify-center mt-64 md:mt-24'>

                  <div className='w-full md:w-6/12 md:order-2 border-l border-r border-zinc-700'>
                    <TabsDetails 
                      info={detailsParam}
                      credits={credits}
                      reviews={reviews}
                    />
                  </div>
                  <div className='w-full md:w-3/12 md:order-1'>
                    <div className='my-5 flex flex-col'>
                      <p className='mb-5 text-center text-white text-3xl md:text-2xl'>Rating</p>
                      <ProgressBar 
                        vote_average={detailsParam.vote_average}
                      />
                      <p className=' mt-10 text-center text-3xl md:text-xl text-white'>
                        Runtime: {''}
                        {detailsParam.runtime 
                          ? <span className='text-zinc-400 text-2xl md:text-base'>Min: {detailsParam.runtime}</span> 
                          : null //<p>{details.episode_run_time.reduce((acc, curr) => acc + curr, 0)}</p> 
                        }
                      </p>

                    </div>
                  </div>
                  <div className='w-full md:w-3/12 md:order-3 mx-0 md:mx-3'>
                  <p className='mb-5 text-center text-white text-3xl md:text-2xl'>Media</p>
                    {videos.results.slice(0,2).map((video) => (
                      <div key={video.id} className='my-4 flex justify-center items-center'>
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
                <aside className='hidden md:block w-2/12 text-white mx-3 mb-4'>
                  <Aside 
                    data={false }
                    movies={similar}
                    title='Similar'
                  />
                </aside>
            </div>
            <Footer/>
          </>
          
        )} 
    </>
  )
}

export default Details