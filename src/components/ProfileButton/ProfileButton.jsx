import { faGear, faSun, faTableColumns, faUser } from '@fortawesome/free-solid-svg-icons';
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
         <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger  sm:mr-0' 
            onClick={()=>{setOpen(!open)}}
            >
                <img
                    className=' w-10' 
                    src={ 
                    //   user?.profilePicture.secure_url != '' ? user.profilePicture.secure_url : 
                      '/avatar.png'}    
                />
            </div>

            <div className={`dropdown-menu z-20 bg-zinc-800 border border-zinc-600 ${open? 'active' : 'inactive'}`} >
              <p className=' text-center text-xl sm:text-3xl'>User</p>
              <p className='text-center'>Email</p>
              <ul>
                  <li className = 'dropdownItem p-2 hover:bg-gray-700 hover:text-white transition rounded'>
                      <div className='px-2'>
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <Link to='/'>My Profile</Link>
                  </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileButton