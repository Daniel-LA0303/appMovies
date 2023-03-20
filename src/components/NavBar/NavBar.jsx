import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
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
                        className={`md:hidden dark fixed z-40 w-full h-full bottom-0 py-10 pl-4 
                        duration-100
                         ${
                            open ? " left-0" : "left-[-100%]"
                            }
                        `}
                    >
                        <li>
                            <Link 
                                to="/" 
                                className="pt-10 pb-5 px-3 inline-block text-lg sm:text-xl text-emerald-500"
                                onClick={() => stateNav()}
                            >
                                Home
                            </Link>
                        </li>
                        <NavsLinks stateNav={stateNav}/>
                
                    </ul>
                </div>

        </div>
        <div className="flex justify-between items-center w-auto">
            <Search />
            <ProfileButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
