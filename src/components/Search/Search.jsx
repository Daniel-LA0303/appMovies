import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { cars } from '../../helpers/data'
import './Search.css'
import { useNavigate } from 'react-router-dom'
// import {navi}

const Search = () => {
  const route = useNavigate();
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

  const handleSubmit = () => {
    setSearch('')
    route(`search/${search}`)
  }
  // route(`/search/${search}`)
  return (
    <>
      <button className="nav-button uil uil-estate"></button>
        <div className="wrapper">
          <div className={`bg-zinc-700 search ${isOpen}`}>
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                onChange={handleChange}
                placeholder="Find a movie"
                type="text"
                className=' bg-zinc-700'
              />
            </form>
            
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
        </div>
    </>
  )
}

export default Search