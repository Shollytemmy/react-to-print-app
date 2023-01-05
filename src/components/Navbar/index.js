import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
    const [mobileView, setMobileView] = useState(false)
  return (
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className="nav-links">
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>

              <Link to="/" className='about'>
                <li>About</li>
            </Link>

              <Link to="/" className='contact'>
                <li>Contact</li>
            </Link>

              <Link to="/" className='login'>
                <li>Login</li>
            </Link>
        </ul>

        <button className="mobile__view">
            {mobileView ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>


    </nav>
  )
}
