import React, { useContext } from 'react';
import stardull from '../Assets/star_dull_icon.png';
import staricon from '../Assets/star_icon.png';
import './ProductDisplay.css';
import { addtocart} from '../Item/Item'
import { wish } from '../Item/Item';
import { BsHeart } from "react-icons/bs";
import allproduct from '../Assets/allproduct';
import { FaLeaf } from 'react-icons/fa6';

const ProductDisplay = (props) => {
    const cart=(i)=>{
        if(!(addtocart.includes(i))){
            addtocart.push(i);
           
        }
    }
    const wlist=(i)=>{
        if(!(wish.includes(i))){
          wish.push(i);
          
          // alert("Item added to wishlist");
      }
      }
    
  
    const {product}=props;
    // const{addtocart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            {/* <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div> */}
            <div className="productdisplay-image">
                <img  className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
           <h3> By <b>{product.author}</b></h3>
            <div className="productdisplay-right-star">
                <img src={staricon} alt="" />
                <img src={staricon}alt="" />
                <img src={staricon} alt="" />
                <img src={staricon} alt="" />
                <img src={stardull} alt="" />
                <p>({product.reviews})</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.oldprice}</div>
                    <div className="productdisplay-right-price-new">${product.newprice}</div>
            </div>
            <div className="productdisplay-right-description">
               {product.summary}
            </div >
            <div className="but">
           <button className='addtc' onClick={()=>{cart(product)}} >ADD TO CART</button>
           <button style={{display:'flex',gap:5,justifyContent:'center'}}className='wtc'  onClick={()=>{wlist(product.id)}}> WISH LIST <div ><BsHeart /></div></button> 
           </div>
        </div>

    </div>
  )
}

export default ProductDisplay