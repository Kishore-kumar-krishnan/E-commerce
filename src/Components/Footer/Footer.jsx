import React from 'react'
import './Footer.css'
import footerlogo from '../Assets/logo.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export default function Footer () {
  return (
    <div className='footer'>
    <div className="footer-logo">
    <img src={footerlogo} alt="" />
    <p>Books</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    
       <div className="footer-copyright">
        <hr />
        <div style={{display:'flex',gap:20}}>
        <FaXTwitter />
        <FiInstagram />
        <BsWhatsapp />
        <FaLinkedinIn />
        <IoLogoYoutube />
        </div>
        <p>Copyright @2023 -  All Right</p>
       </div>
    </div>
    
  )
}

