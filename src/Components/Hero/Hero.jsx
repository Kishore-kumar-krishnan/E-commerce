import React, { useState } from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/right-arrow.png'
import heroimg from '../Assets/men.jpg'
import oldbanner from '../Assets/oldbanner.png'
import newbanner from '../Assets/newbanner.jpg'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useActionData } from 'react-router-dom'
import { set } from 'react-hook-form'
// let img=[
//     {
//         id:1,
//         name:oldbanner,
//     },
//     {
//         id:2,
//         name:newbanner,
//     }
// ]
export default function Hero() {
    return(
    <div className="hero">
    <div className="hero-left">
                <h2> New Arrivals only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                   <Link style={{textDecoration:'none'}} to={'/newbooks'}><div>Latest Collection</div></Link> 
                    <img src={arrowicon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroimg} alt="" />
            </div> 
        </div>
    )
}








//     let c=0;
//     let len=img.length;
//     const[count,setcount]=useState(c);
//     const left=()=>{
//         if(count>0)
//             setcount(c=>c-1);
//         else
//             setcount(len-1);
//     }
//     const right=()=>{
//         if(count<len-1)
//             setcount(c=>c+1);
//         else
//             setcount(0); 
        
//     }
//     return (
//         <div className='hero'>
//             <img  className="img" src={img[count].name} alt=""/>
//             <p  className="hero-left" onClick={left}><IoIosArrowDropleftCircle size={50}/></p>
//             <p  className="hero-right" onClick={right}><IoIosArrowDroprightCircle size={50}/></p>
//         </div>
//     )
// }


