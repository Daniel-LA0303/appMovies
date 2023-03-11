import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon.png";

import NavsLinks from "./NavsLinks";
import Search from "../Search/Search";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between px-5 sm:px-10">
        <div className="flex justify-center w-auto">
            <div className="z-50 p-3 sm:p-4 md:w-auto w-full flex justify-between items-center">
                <div
                    className=" text-2xl sm:text-3xl md:hidden transition-all duration-500 pt-2 sm:pt-1 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon className=" " icon={open ? faClose : faBars} />
                </div>
                <img src={Logo} alt="logo" className="md:cursor-pointer h-9 ml-3 hidden md:block" />
            </div>
            <div>
                
                <ul className="md:flex text-2xl sm:text-xl hidden items-center gap-8">
                    <li>
                        <Link to="/" className="py-6 px-3 inline-block text-lg">
                        Home
                        </Link>
                    </li>
                    <NavsLinks />
                </ul>
                <div className=" md:block hidden">{/* <Button /> */}</div>
                    {/*Mobile navbar */}
                    <ul
                        className={`md:hidden bg-white fixed z-40 w-full h-full bottom-0 py-24 pl-4
                        duration-500 ${
                            open ? "left-0 " : "left-[-100%]"
                            }
                        `}
                    >
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block text-lg sm:text-xl">
                                Home
                            </Link>
                        </li>
                        <NavsLinks />
                
                    </ul>
                </div>

        </div>
        <div>
            <Search />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
