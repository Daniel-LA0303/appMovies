import React from "react";
//hooks
import useGlobal from "../../hooks/useGlobal";
//components
import SliderBackdrop from "../Slider/SliderBackdrop/SliderBackdrop";
import Slider from "../Slider/SliderPath/SliderPath";
import "./Tabs.css";

const Tabs = () => {

    const {
        nowPlaying,
        popular,
        upcoming,
        topRated,
        isLoadingMovie,
        nowPlayingTV, 
        topRatedTV, 
        popularTV,
        isLoadingTV,
        isLoadingCat,
        genresHome,
        tendingMovie,
        tabs,
        setTabs
    } = useGlobal();


  return (
    <>
        <div className="warpper">
            <input className="radio" id="one" name="group" type="radio"  onChange={() => setTabs(!tabs)} defaultChecked={tabs}/>
            <input className="radio" id="two" name="group" type="radio" onChange={() => setTabs(!tabs)} defaultChecked={!tabs}
             
            />
            {/* <input className="radio" id="three" name="group" type="radio" /> */}
            <div className="tabs">
                <label className="tab" id="one-tab" htmlFor="one"
                    onClick={() => setTabs(false)} 
                >
                    Movies
                </label>
                <label className="tab" id="two-tab" htmlFor="two"
                    onClick={() => setTabs(true)}
                >
                    Tv Shows
                </label>
            </div>
            <div className="panels">
                <div className="panel" id="one-panel">
                    <div className='w-full'>
                        <SliderBackdrop data={nowPlaying} />
                    </div>
                    <div className='w-full sm:mx-auto text-white'>            
                        <div className=' mt-10 mb-2'>
                            <h1 className=' font-light text-3xl'>Populare</h1>
                            <Slider data={popular} delay={2500} series={false}/>
                        </div>
                            
                        <div className=' mb-2'>
                            <h1 className=' font-light text-3xl'>Comming Soon</h1>
                            <Slider data={upcoming} delay={2700} series={false}/>
                        </div>
                    
                        <div className=' mb-2'>
                            <h1 className=' font-light text-3xl'>Top Rated</h1>
                            <Slider data={topRated} delay={3000} series={false}/>
                        </div>
                    </div>
                </div>
                <div className="panel" id="two-panel">
                    {/* <div className="panel-title">Take-Away Skills</div> */}
                    <div className='w-full'>
                        <SliderBackdrop data={nowPlayingTV} />
                    </div>
                    <div className='mt-10 mb-2'>
                        <h1 className='font-light text-3xl'>Top Rated TV</h1>
                        <Slider data={topRatedTV} delay={2500} series={true}/>
                    </div>
                        
                    <div className=' mb-2'>
                        <h1 className='font-light text-3xl'>Popular TV shows</h1>
                        <Slider data={popularTV} delay={2700} series={true}/>
                    </div>
                
                    <div className=' mb-2'>
                        <h1 className='font-light text-3xl'>Estrenadas</h1>
                        <Slider data={nowPlayingTV} delay={3000} series={true}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Tabs;
