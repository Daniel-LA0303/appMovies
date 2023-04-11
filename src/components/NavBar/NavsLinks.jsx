import React, { useState } from 'react'
import { links } from './MultiLinks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavsLinks = ({stateNav}) => {

    const[heading, setHeading] = useState("");
    const[subHeading, setSubHeading] = useState("");

  return (
    <>
  {
    links.map((link) => (
        <div key={link.name}>
            <div className='px-3 text-left md:cursor-pointer group'>
                <h1 
                    className='py-5 text-base md:text-sm flex justify-between items-center md:pr-0 pr-5 group'
                >
                    <Link 
                        to={link.linkName}
                        onClick={() => stateNav()}
                    >{link.name}</Link>
                    <span
                        className=' text-xl md:hidden inline'
                        onClick={() => {heading !== link.name 
                            ? setHeading(link.name)
                            : setHeading('');
                            setSubHeading('')
                        }}
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
                        <div className='fixed z-50 top-15 hidden group-hover:md:block hover:md:block group-hover:-mt-2'> {/*aqui se le cambio el z-50 para que se vea mejor*/ }
                            <div className='py-2'>
                                <div className='w-4 h-4 left-3 absolute m-1 rotate-45'></div>
                            </div>
                            <div className='grid grid-cols-2 gap-1 bg-zinc-800  p-5 duration-500 rounded-lg border border-zinc-600'>
                                {
                                    link.sublinks.map((mysublinks) => (
                                        <div>
                                            <Link to={mysublinks.linkHead} className=' text-sm'>{mysublinks.Head}</Link>

                                            {mysublinks.sublinkBoolean && (
                                                <>
                                                    {mysublinks.subLinkMovie ? (
                                                        <>
                                                            {mysublinks.sublink.map(slink =>(
                                                                <li className='text-xs my-2.5'>
                                                                    <Link
                                                                        to={`categorie/movie${slink.link}`}
                                                                        className="hover:text-sky-600"    
                                                                    >{slink.name}</Link>
                                                                </li>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {mysublinks.sublink.map(slink =>(
                                                                <li className='text-xs my-2.5'>
                                                                    <Link
                                                                        to={`categorie/serie${slink.link}`}
                                                                        className="hover:text-sky-600"    
                                                                    >{slink.name}</Link>
                                                                </li>
                                                            ))}
                                                        </>
                                                    )}
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
                            <h1 
                                
                                onClick={()=> subHeading !== slinks.Head 
                                    ? setSubHeading(slinks.Head) 
                                    : setSubHeading("")}
                                className='py-4 pl-4 text-base md:pr-0 pr-5 flex justify-between items-center hover:text-blue-800'
                            >
                                <Link 
                                    onClick={() => stateNav()}
                                    to={slinks.linkHead}
                                >{slinks.Head}</Link>
                                {slinks.sublinkBoolean && (
                                    <span
                                        className=' text-base md:mt-1 md:ml-2 inline duration-500'
                                    >
                                        <FontAwesomeIcon icon={subHeading===slinks.Head ? faChevronUp : faChevronDown}/>
                                    </span>
                                )}

                            </h1>


                            {slinks.sublinkBoolean && (
                                <div
                                    className={`
                                        ${subHeading === slinks.Head ? 'md:hidden' : 'hidden'} duration-500 overflow-scroll h-44`}
                                >
                                    {/* cette part on peut le optimizier plus*/}
                                    {slinks.subLinkMovie ? (
                                        <>
                                            {slinks.sublink.map(slink=>(
                                                <li
                                                    className='py-1 pl-14'
                                                >
                                                    <Link
                                                        to={`/categorie/movie${slink.link}`}
                                                        onClick={() => stateNav()}
                                                        className="hover:text-blue-800 text-sm" 
                                                    >{slink.name}</Link>
                                                </li>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {slinks.sublink.map(slink=>(
                                                <li
                                                    className='py-1 pl-14'
                                                >
                                                    <Link
                                                        to={`/categorie/serie${slink.link}`}
                                                        onClick={() => stateNav()}
                                                        className="hover:text-blue-800 text-sm" 
                                                    >{slink.name}</Link>
                                                </li>
                                            ))}
                                        </>
                                    )}
                                </div>
                            )}
                            
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