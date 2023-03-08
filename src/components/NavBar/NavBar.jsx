import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from "../../assets/icon.png";

import NavsLinks from './NavsLinks';
const NavBar = () => {

    const[open, setOpen] = useState(false);

  return (
    <nav
        className='bg-white'
    >
        <div
            className='flex items-center font-medium justify-around'
        >
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                <div 
                    className='text-3xl md:hidden transition-all duration-500 '
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon className=' ' icon={open ? faClose : faBars} />
                </div>
            </div>

            <ul className='md:flex hidden uppercase items-center gap-8 font-sans'>
                <li>
                    <Link to="/" className="py-7 px-3 inline-block">
                        Home</Link>
                </li>
                <NavsLinks />
            </ul>
            <div className=' md:block hidden'>
                {/* <Button /> */}
            </div>
            {/*Mobile navbar */}
            <ul className={`md:hidden bg-white fixed z-40 w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? 'left-0 ' : 'left-[-100%]'}
            `}>
                <li>
                    <Link to="/" className="py-7 px-3 inline-block">
                        Home</Link>
                </li>
                <NavsLinks />
                <div className='py-5'>
                    {/* <Button /> */}
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar