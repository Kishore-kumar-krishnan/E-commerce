import React, { useState } from "react";
import { wish } from "../Item/Item";
import removeicon from '../Assets/cart_cross_icon.png';
import allproduct from '../Assets/allproduct';
import { BiCartAdd } from "react-icons/bi";
import './wishlist.css'
import { addtocart } from '../Item/Item'
import { BsHeartbreak } from "react-icons/bs";
import { Link } from "react-router-dom";
import wishempty from '../Assets/wishempty.png'

//add to cart
    const cart=(i)=>{
        if(!(addtocart.includes(i))){
            addtocart.push(i);
           
        }
    }

    //add to wishlist
export const W=(props)=>{
  const [empty,setempty]=useState("empty");
const c1=[];
    allproduct.map((index)=>{
        for(let i=0;i<wish.length;i++){
            if(wish[i]===index.id){
                {!c1.includes(index) && c1.push(index)}
                console.log(index);
                console.log(c1);
            }
        }
    })
    const{product}=props;
    return(
     <div className="whole">
      {c1.length!=0 ?
        c1.map((k) => {
          return(
          <div className="wish">
            <Link to={`/product/${k.id}`}><img onClick={window.scrollTo(0,0)}src={k.image} alt="" /></Link> 
            <p><b>{k.name}</b></p>
            <p>{k.author}</p>
            <div className="price">
              <div className="old">
                ${k.oldprice}
              </div>
              <div className="new">
                ${k.newprice}
              </div>
            <div style={{marginTop:0,marginLeft:40}} className="cart" >
            <BiCartAdd size={30}className="atc" onClick={()=>{cart(k)}}/>
            </div>
            </div>
          </div>
          )
        })
      : <div className="wishempty"> 
             <div >
                 <img src={wishempty} alt=""/>
                <h2>Your WishList is Empty <span>!!!</span></h2>
             </div>
       </div>}
      
         {/* <BsHeartbreak size={90}/> */}
      </div>
    )  
}





















// return(
//   <div style={{marginTop:400}}>
//      {c1.map((k) => {
//        <div className="wish">
//          <div className="img"><img src={k.image} alt="" /></div>
//          <p>{k.name}</p>
//          <p>{k.author}</p>
//          <div className="price">
//            <div className="old">
//              ${k.oldprice}
//            </div>
//            <div className="new">
//              ${k.newprice}
//            </div>
//          </div>
//          <BiCartAdd/>
//        </div>
           
//      })}
//    </div>
//  ) 
 