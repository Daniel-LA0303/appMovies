import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faRightToBracket, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon.png";

//components
import NavsLinks from "./NavsLinks";
import Search from "../Search/Search";
import ProfileButton from "../ProfileButton/ProfileButton";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const stateNav = () => {
    setOpen(!open)
  }


  return (
    <nav className="dark text-white border-b-2 border-zinc-600 ">
      <div className="flex items-center font-medium justify-between px-0 sm:px-1 lg:px-10">
        <div className="flex justify-center w-auto">
            <div className="z-50 pr-2 py-2  sm:py-0 md:w-auto w-full flex justify-between items-center">
                <div
                    className={`text-2xl sm:text-3xl md:hidden transition-all duration-500 pl-3  sm:pt-1 cursor-pointer ${open && 'fixed top-4'}`}
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon className=" " icon={open ? faClose : faBars} />
                </div>
                <img src={Logo} alt="logo" className="md:cursor-pointer h-9 ml-3 hidden md:block" />
            </div>
            <div>
                
                <ul className="md:flex text-xs hidden items-center gap-8">
                    <li>
                        <Link to="/" className="py-6 px-3 inline-block text-base md:text-sm ">
                            Home
                        </Link>
                    </li>
                    <NavsLinks 
                        stateNav={stateNav}
                    />
                </ul>
                <div className=" md:block hidden">{/* <Button /> */}</div>
                    {/*Mobile navbar */}
                    <ul 
                        // dans cette part il y a un error avec le "duration-100" en version movil navbar
                        className={`md:hidden flex justify-between flex-col dark fixed z-40 w-full h-full bottom-0 py-10 pl-4 
                        duration-100
                         ${
                            open ? " left-0" : "left-[-100%]"
                            }
                        `}
                    >   
                        <li className="flex flex-col">
                            <Link 
                                to="/" 
                                className="pt-10 border-b border-zinc-400 pb-5 px-3 inline-block text-lg sm:text-xl text-emerald-500"
                                onClick={() => stateNav()}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/movies" 
                                className="pt-10 pb-5 px-3 border-b border-zinc-400 inline-block text-lg sm:text-xl text-emerald-500"
                                onClick={() => stateNav()}
                            >
                                Movies
                            </Link>
                            <Link 
                                to="/series" 
                                className="pt-10 pb-5 px-3 border-b border-zinc-400 inline-block text-lg sm:text-xl text-emerald-500"
                                onClick={() => stateNav()}
                            >
                                TV Shows
                            </Link>
                        </li>
                        {/* <NavsLinks stateNav={stateNav}/> */}
                        <div className='block sm:hidden mt-20' >
                            <Link to={'/login'} className='text-base w-40 bg-violet-600 h-10 flex items-center justify-center rounded-lg mb-3 cursor-pointer hover:bg-violet-700 transition-all duration-100'>
                                <FontAwesomeIcon icon={faUserCircle} className=' mr-2'/>
                                <span className=' text-sm'>Sign in</span>
                            </Link>
                            <Link to={'/register'} className='text-base w-40 border-2 border-violet-600 h-10 flex items-center justify-center rounded-lg mb-3 cursor-pointer hover:border-violet-900 transition-all duration-100'>
                                <FontAwesomeIcon icon={faRightToBracket} className=' mr-2'/>
                                <span className=' text-sm'>Sign up</span>
                            </Link>
                        </div>
                
                    </ul>
                </div>

        </div>
        <div className="flex justify-between items-center w-auto">
            <Search />
            <div className="hidden sm:block">
                <ProfileButton />
            </div>
           
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
