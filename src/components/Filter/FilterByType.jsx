import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";
import useGlobal from '../../hooks/useGlobal';

const FilterByType = ({movies}) => {

    const {
        filterState,
        setFilterState
    } = useGlobal();
    
    const [filter] = useAutoAnimate();  
    const [openFilter, setOpenFilter] = useState(false);
    useEffect(() => { 
      setOpenFilter(true)
    }, [])

    const options = [
        { value: "popular", label: "Most popular" },
        { value: "top_rated", label: "Most rating" },
        { value: movies ? "upcoming" : "on_the_air", label: movies ? "Most recent" : "On Air"},
      ];

      const customStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: "#49494b",
          boxShadow: "none",
          border: 0,
        }),
        option: (
          styles,
          { data, isDisabled, isFocused, isSelected }
        ) => ({
          ...styles,
          backgroundColor: isSelected ? "#989898" : "#49494b",
          
        }),
    
        singleValue: (provided) => {
          return { ...provided, color: "white" };
        },
    
        menu: (styles) => ({
          ...styles,

          backgroundColor: "#49494b",
        }),
      };
      const handleChange = (filterState) => {
        setFilterState(filterState);
      };
  return (
    <div
      ref={filter}
      className=" bg-zinc-800 rounded-md shadow-md px-4 py-2 mx-2 sm:mx-5 my-3"
    >
      <div className="flex justify-between items-center text-white py-1">
        <p className="text-lg">Sort</p>
        <button onClick={() => setOpenFilter((prev) => !prev)}>
          {openFilter && <FontAwesomeIcon icon={faChevronUp}  />}
          {!openFilter && <FontAwesomeIcon icon={faChevronDown}  />}
        </button>
      </div>
      {openFilter && (
        <div className="py-3 border-t border-dark-darken">
            <p className="text-lg mb-4 text-white/80">Results by</p>
            <Select
            options={options}
            styles={customStyles}
            defaultValue={options[0]}
            value={filterState}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}

export default FilterByType