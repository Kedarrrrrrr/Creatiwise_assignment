import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo"/> 
      <div className="navbar-menu">
      <ul>
      <li>Home </li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      </ul>
      </div>
      <button className="hire-me">Hire Me</button>
    </nav>
  )
}

export default Navbar
