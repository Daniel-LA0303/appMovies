import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-8 sm:h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-3 sm:mt-4 mr-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 h-4 w-4 fill-current"/>
        </button>
    </div>
  )
}

export default Search