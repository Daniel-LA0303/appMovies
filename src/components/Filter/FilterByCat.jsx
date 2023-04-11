import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FilterByCat = () => {
    const [filter] = useAutoAnimate();

    const [openFilter, setOpenFilter] = useState(false);
    useEffect(() => { 
      setOpenFilter(false)
    }, [])
    
  return (
    <div
      ref={filter}
      className=" bg-zinc-800 rounded-md shadow-md px-4 py-2 mx-2 sm:mx-5"
    >
      <div className="flex justify-between items-center text-white py-1">
        <p className="text-lg">Filter</p>
        <button onClick={() => setOpenFilter((prev) => !prev)}>
          {openFilter && <FontAwesomeIcon icon={faChevronUp}  />}
          {!openFilter && <FontAwesomeIcon icon={faChevronDown}  />}
        </button>
      </div>
      {openFilter && (
        <div className="py-3 border-t border-dark-darken">
          <p className="text-lg mb-4 text-white/80">Genres</p>

          <p className="text-lg mb-2 mt-8 text-white/80">Runtime</p>
          <p className="text-lg mb-2 mt-8 text-white/80">Release Dates</p>
        </div>
      )}
    </div>
  )
}

export default FilterByCat