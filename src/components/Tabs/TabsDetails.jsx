import React, { useState } from "react";

const TabsDetails = ({ info, credits, reviews }) => {
  
    const [tabs, setTabs] = useState(true)

    // const cast = credits.cast.slice(0,8)

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }

  return (
    <div className="warpper w-full">
        <input className="radio" id="one" name="group" type="radio"  onChange={() => setTabs(!tabs)} defaultChecked={true}/>
        <input className="radio" id="two" name="group" type="radio" onChange={() => setTabs(!tabs)} />
        <input className="radio" id="three" name="group" type="radio" onChange={() => setTabs(!tabs)} />
        {/* <input className="radio" id="three" name="group" type="radio" /> */}
        <div className="tabs flex justify-around">
            <label className="tab" id="one-tab" htmlFor="one"
                onClick={() => setTabs(false)} 
            >
                Overview
            </label>
            <label className="tab" id="two-tab" htmlFor="two"
                onClick={() => setTabs(true)}
            >
                Cast
            </label>
            <label className="tab" id="three-tab" htmlFor="three"
                onClick={() => setTabs(true)}
            >
                Reviews
            </label>
        </div>
    <div className="panels ">
        <div className="panel mx-5" id="one-panel">
            <div className='w-full sm:mx-auto text-white'>            
                <div className=' mt-10 mb-2'>
                    <h2 className=" text-start text-white text-2xl font-light mb-2">Story</h2>
                    <p className=" font-light mb-4 text-zinc-400">{info.overview}</p>
                    <h2 className=" text-start text-white text-2xl font-light mb-3">Details</h2>
                    <p className=" font-light mb-2 text-zinc-400">Status: {info.status}</p>
                    <p className=" font-light mb-2 text-zinc-400">Release date: {info.release_date ? info.release_date : info.first_air_date}</p>
                    <p className=" font-light text-zinc-400">
                        Languages: {info.spoken_languages.map(lan => (
                        <span key={lan} > {lan.name}</span> 
                        ))}
                    </p>
                </div>
                    
                <div className='my-3'>  
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                    </div>
                </div> 
            </div>
        </div>
        <div className="panel mx-5 " id="two-panel">
            <div className='mt-10 mb-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {credits.map(c => (
                     <div className="max-w-xs flex items-center bg-zinc-700 rounded-md">
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                                alt={c.name}
                                className="object-cover w-16 h-16 rounded-md"
                            />
                        </div>
                        <div className=" ml-2">
                            <h2 className=" font-medium text-zinc-400 text-base">{c.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">{c.character}</p>
                        </div>
                   </div>
                ))}
            </div>
                

        </div>
        <div className="panel mx-5" id="three-panel">
            <div className='mt-10'>
                {reviews.results.slice(0,8).map(r => (
                    <div className="bg-zinc-700 shadow rounded-lg px-4 py-2 my-2">
                        <h2 className="text-lg font-light text-start text-zinc-400 mb-2">{r.author}</h2>
                        <p className="text-sm text-gray-500 mb-2">{formatDate(r.created_at)}</p>
                        <p className="text-gray-500 text-xs">{r.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
  );
};

export default TabsDetails;