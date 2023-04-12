import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { cars } from '../../helpers/data'
import './Search.css'
import { useNavigate } from 'react-router-dom'
// import {navi}

const Search = () => {
  const route = useNavigate();
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);


  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    if(isOpen && search){
      console.log('tiene algo');
      navigateIn()
      setTimeout(() => {
        setIsOpen(!(isOpen) ? "open" : "");
      }, 1000);
      setSearch('')
    }

    setIsOpen(!(isOpen) ? "open" : "");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const navigateIn = () => {
    route(`all/${search}`)
  }

  return (
    <>
      <button className="nav-button uil uil-estate"></button>
        <div className="wrapper">              
          <div className={`bg-zinc-700 search ${isOpen}`}>
              <input
                ref={inputRef}
                onChange={handleChange}
                placeholder="Find a movie"
                type="text"
                className=' bg-zinc-700'
                value={search}
              />
            
            <button
              onClick={() => handleClick()}
              className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
            >
              <FontAwesomeIcon 
                icon={faSearch} 
                className=' text-sm'
              />
            </button>
          </div>
        </div>
    </>
  )
}

export default Search