import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Usaid books</h2>
        <h4><Link to='/'>Management System</Link></h4>
    </div>
  )
}

export default Navbar