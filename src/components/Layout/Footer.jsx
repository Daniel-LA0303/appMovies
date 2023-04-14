import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import faGith

const Footer = () => {
  return (
    <footer className=" bg-zinc-700  text-white py-4">
        <div className='flex items-center justify-between mx-4'>
            <p className="text-lg font-light">Daniel-LA</p>
            <div className="flex ">
                <a
                    href="https://github.com/Daniel-LA0303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white mr-2"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                    href="https://www.linkedin.com/in/luis-alberto-zacarias-daniel-137118209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
        </div>
        </div>

    </footer>

  )
}

export default Footer