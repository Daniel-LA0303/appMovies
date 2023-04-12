import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../assets/login.svg';

const Register = () => {
  return (
    <div className='body-login' style={{ backgroundImage: `url(${loginImg})` }}>
        <div className="login-card text-white">
            <h2 className=' text-white font-light mb-10'>Register</h2>
            {/* <h3 className='text-white font-light'>Enter your credentials</h3> */}
            <form className="login-form text-zinc-700">
                <input type="text" placeholder="Email" className=' rounded' />
                <input type="text" placeholder="Username" className=' rounded' />
                <input type="password" placeholder="Password" className=' rounded'/>
                <Link to='/login' className=' text-violet-500'>Login here</Link>
                <button  className='hover:bg-zinc-600 bg-violet-500'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default Register