import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'
import eximg from '../Assets/p3.jpeg'
export default function Offers ()  {
  return  (
    <div className='offers'>  
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST OLDBOOKS</p>
            <button><Link style={{textDecoration:'none'}} to='/Oldbooks'>Check Now</Link></button>
        </div>
        <div className="offers-right">
          <img src={eximg} alt="" />
        </div>
    </div>
  )
}

