import React from 'react'
import { Link} from 'react-router-dom'
import './Footer.css';
import { FaFacebookF,FaInstagram,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
  
   <div className='footer'>
    <ul>
    <li><Link> <FaInstagram/></Link></li>
    <li><Link > <FaFacebookF/></Link></li>
    <li><Link ><FaGithub/></Link></li>
    </ul>   
    </div>
 
 
  )
}

export default Footer