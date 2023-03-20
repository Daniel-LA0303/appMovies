import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { cars } from '../../helpers/data'
import './Search.css'

const Search = () => {

  const [visible, setVisible] = useState(false)

  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!(isOpen) ? "open" : "");
    console.log('click');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCars = cars.filter(
    (car) =>
      search.length && car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <div className={` w-60 sm:w-40 h-7 flex justify-end items-center `}>
    //   <input 
    //     type='search'
    //     className={`w-60 sm:w-40  h-full rounded-l-md text-zinc-600 pl-2 transition duration-500 ease-in-out  ${!visible ? 'hidden translate-x-full' : 'block translate-x-0'}`}
    //   />
    //   <div 
    //     onClick={() => setVisible(!visible)}
    //     className={`${!visible ? 'rounded-md': 'rounded-r-md'} bg-white h-full pt-1 px-3 `}>
    //     <FontAwesomeIcon 
    //       icon={faSearch} 
    //       className='  text-zinc-600  '
    //     />
    //   </div>
    // </div>
    <>
      {/* <button className="nav-button uil uil-estate"></button> */}
        <div className="wrapper">
          <div className={`bg-zinc-700 search ${isOpen}`}>
            <input
              ref={inputRef}
              onChange={handleChange}
              placeholder="Find a movie"
              type="text"
              className=' bg-zinc-700'
            />
            <button
              onClick={handleClick}
              className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
            >
              <FontAwesomeIcon 
                icon={isOpen ? faX : faSearch} 
                className=' text-sm'
              />
            </button>
          </div>
          {/* <div className={`items ${isOpen} z-10`}>
            {(filteredCars.length) ?
              filteredCars?.map(
                (car, index) =>
                  index < 3 && <button key={car.name}>{car.name}</button>
              ) : null}
          </div> */}
        </div>
        {/* <button className="nav-button uil uil-bars"></button> */}
    </>
  )
}

export default Search