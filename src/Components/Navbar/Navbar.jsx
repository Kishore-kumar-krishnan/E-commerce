import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import carticon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.jpg'
import './Navbar.css'
import { BsHeart } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidCart } from "react-icons/bi";
export const Navbar = () => {

    const [menu,setmenu]=useState("Login");
    // const{getTotalCartItems}=useContext(ShopContext);
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Books</p>
        </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr style={{width:60}}/>:<></>}</li>
                <li onClick={()=>{setmenu("Oldbooks")}}><Link style={{textDecoration:'none'}} to='/Oldbooks'>Oldbooks</Link>{menu==="Oldbooks"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Newbooks")}}><Link style={{textDecoration:'none'}}to='/Newbooks'>Newbooks</Link>{menu==="Newbooks"?<hr/>:<></>}</li>
            </ul>
            <div >
                <ul className='nav-login-cart'>
            <li onClick={()=>{setmenu("wishlist")}}><Link style={{textDecoration:'none'}} to='/wishlist'><BsHeart size={30}/></Link>{menu==="wishlist"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("cart")}}><Link style={{textDecoration:'none'}} to='/cart'><BiSolidCart size={40}/></Link>{menu==="cart"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("LoginSignup")}}><Link style={{textDecoration:'none'}} to='/SignIn'> <MdAccountCircle size={40}/></Link>{menu==="LoginSignup"?<hr/>:<></>}</li>
                </ul>
                {/* <Link to='/wishlist'><BsHeart size={30}/></Link>
               <Link to='/LoginSignup'> <MdAccountCircle size={40}/></Link>
                <Link to='/cart'><BiSolidCart size={40}/></Link> */}
                {/* <div className="nav-cart-count">{}</div> */}
            </div>
        </div>
        
  )
}
