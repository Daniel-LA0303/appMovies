import { faEnvelope, faRightToBracket, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './ProfileButton.css'

function ProfileButton() {

    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });
  return (
    <div className="">
         <div className='' ref={menuRef}>
            <div className='menu-trigger  sm:mr-0' 
            onClick={()=>{setOpen(!open)}}
            >
                <img
                    className=' w-10' 
                    src='/avatar.png'
                />
            </div>

            <div className={`dropdown-menu z-20 bg-zinc-800 border border-zinc-600 ${open? 'active' : 'inactive'}`} >
              <p className='text-base mb-3'>
                <FontAwesomeIcon icon={faUser} className=' mr-2'/>
                <span className=' text-sm'>Profile</span>
              </p>
              <Link to={'/login'} className='text-base w-full bg-violet-600 h-10 flex items-center justify-center rounded-lg mb-3 cursor-pointer hover:bg-violet-700 transition-all duration-100'>
                <FontAwesomeIcon icon={faUserCircle} className=' mr-2'/>
                <span className=' text-sm'>Sign in</span>
              </Link>
              <Link to={'/register'} className='text-base w-full border-2 border-violet-600 h-10 flex items-center justify-center rounded-lg mb-3 cursor-pointer hover:border-violet-900 transition-all duration-100'>
                <FontAwesomeIcon icon={faRightToBracket} className=' mr-2'/>
                <span className=' text-sm'>Sign up</span>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileButton