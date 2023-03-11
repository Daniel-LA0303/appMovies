import React, { useState } from 'react'
import { links } from './MultiLinks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavsLinks = () => {

    const[heading, setHeading] = useState("");
    const[subHeading, setSubHeading] = useState("");

  return (
    <>
  {
    links.map((link) => (
        <div>
            <div className='px-3 text-left md:cursor-pointer group'>
                <h1 
                    className='py-6 text-lg flex justify-between items-center md:pr-0 pr-5 group'
                    onClick={() => {heading !== link.name 
                        ? setHeading(link.name)
                        : setHeading('');
                        setSubHeading('')
                    }}
                >
                    {link.name}
                    <span
                        className=' text-xl md:hidden inline'
                    >
                        <FontAwesomeIcon icon={heading===link.name ? faChevronUp : faChevronDown}/>
                    </span>
                    <span
                        className='md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 duration-500'
                    >
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </span>
                </h1>
                
                {link.submenu && (
                    <div>
                        <div className='fixed z-50 top-20 hidden group-hover:md:block hover:md:block group-hover:-mt-2'> {/*aqui se le cambio el z-50 para que se vea mejor*/ }
                            <div className='py-2'>
                                <div className='w-4 h-4 left-3 absolute m-1 bg-white rotate-45'></div>
                            </div>
                            <div className='bg-white p-5 w-auto duration-500'>
                                {
                                    link.sublinks.map((mysublinks) => (
                                        <div>
                                            <h1 className=' text-sm'>{mysublinks.Head}</h1>
                                            {mysublinks.sublinkBoolean && (
                                                <>
                                                    {mysublinks.sublink.map(slink =>(
                                                        <li className='text-xs text-gray-600 my-2.5'>
                                                            <a
                                                                // to={slink.link}
                                                                className=" hover:text-blue-800"    
                                                            >{slink.name}</a>
                                                        </li>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* navbar mobile */}
            <div
                className={`
                    ${heading === link.name ? 'md:hidden' : 'hidden'}
                `}
            >
                {/*Sublinks*/}
                {link.sublinks.map((slinks) =>(
                    <div>
                        <div>
                            <a 
                                onClick={()=> subHeading !== slinks.Head 
                                    ? setSubHeading(slinks.Head) 
                                    : setSubHeading("")}
                                className='py-4 pl-4 text-base md:pr-0 pr-5 flex justify-between items-center hover:text-blue-800'
                            >
                                {slinks.Head}
                                {slinks.sublinkBoolean && (
                                    <span
                                        className=' text-base md:mt-1 md:ml-2 inline duration-500'
                                    >
                                        <FontAwesomeIcon icon={subHeading===slinks.Head ? faChevronUp : faChevronDown}/>
                                    </span>
                                )}

                            </a>
                            <div
                                className={`
                                    ${subHeading === slinks.Head ? 'md:hidden' : 'hidden'} duration-500`}
                            >
                                {slinks.sublink.map(slink=>(
                                    <li
                                        className='py-3 pl-14'
                                    >
                                        <a
                                            // to={slink.link}
                                            className="hover:text-blue-800 text-sm" 
                                        >{slink.name}</a>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ))}
      </>
  )
}

export default NavsLinks