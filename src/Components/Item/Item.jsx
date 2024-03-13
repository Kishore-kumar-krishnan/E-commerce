import React, { useState } from 'react'
import './Item.css'
import { Link, useParams } from 'react-router-dom'
import { BiCartAdd } from "react-icons/bi";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
export const addtocart=[];
export const wish=[];
const Item = (props) => {
  const [wishlist,setwishlist]=useState(false);
  const cart=(i)=>{
    if(!(addtocart.includes(i))){
      console.log("props"+JSON.stringify(props));
      console.log("kavin"+JSON.stringify(i));
        addtocart.push(i);
    }
  }
  const wlist=(i)=>{
    if(!(wish.includes(i))){
      wish.push(i);
      setwishlist(true);
      // alert("Item added to wishlist");
  }
  }

 
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt="" /></Link> 
        <p><b>{props.name}</b></p>
        <p>{props.author}</p>
        <div className="item-prices">
          <div className="item-price-old">
            ${props.oldprice}
          </div>
          <div className="item-price-new">
           ${props.newprice}
          </div>
          <div style={{display:'grid',gridTemplateColumns:"1fr 1fr" }}>
          
         <div style={{marginTop:0,marginLeft:40}}className="wishlist">
        {wishlist===false && <FaHeartCirclePlus  size={20} onClick={()=>{wlist(props.id)}} />}
        {wishlist && <FaHeartCircleCheck size={20}/> }
        <Link to={`/product/${props.id}`}> <button className='buy_now' style={{marginTop:0,cursor:"pointer"}}>Buy</button></Link>
        </div>

        
        </div>

        </div>
    </div>
  )
}

export default Item