import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
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

              <Link to="/" className='settings'>
                <li>Settings</li>
            </Link>
        </ul>


    </nav>
  )
}
