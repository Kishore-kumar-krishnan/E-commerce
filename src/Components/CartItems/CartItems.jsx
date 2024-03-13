import React, { useContext,useState } from "react";
import removeicon from '../Assets/cart_cross_icon.png';
import {addtocart} from '../Item/Item'
import allproduct from '../Assets/allproduct';
import './CartItems.css';
import { Link } from "react-router-dom";
import emptycart from '../Assets/emptycart.png'

const CartItems=()=>{
    console.log(addtocart)
    //addtocart
    const c=[];
    allproduct.map((index)=>{
        for(let i=0;i<addtocart.length;i++){
            if(addtocart[i]===index.id){
                {!c.includes(index) && c.push(index)}
                console.log(index);
                console.log(c);
            }
        }
    })
  
    //remove from cart
    const [newarr,SetNewarr]=useState(addtocart);
      const [quan,setquan]=useState(newarr);
    const removefromcart=((id,index)=>{
      let arr= newarr.filter((val)=>{
            return val.id!=id;
        })
  
        SetNewarr(arr);
        addtocart.splice(index,1);
    })



    //increament quantity
  
    const increament=(id2)=>{
        let total;
        let a=newarr.filter((value)=>{
            if(value.id===id2){
                if(value.count<10)
                value.count+=1;
            }
            total=value.newprice;
            total=total*value.count;
            value.total=total;
        })
        setquan(a);
    }

    //decreament quantity
    const decreament=(id3)=>{
        let total;
        let b=newarr.filter((value)=>{
            if(value.id===id3){
                if(value.count>1)
                value.count-=1;
            }
            total=value.newprice;
            total=total*value.count;
            value.total=total;
        })
        setquan(b);
    }

    //total price
    let t=0;
    let total=addtocart.map((e)=>{
        t+=e.total;
    })
    
   
    return(
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p style={{paddingLeft:8}}>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {newarr.length!=0 ?
       newarr.map((e)=>{
            return  <div>
            <div className=" cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon"/>
                <p><b>{e.name}</b></p>
                <p style={{paddingLeft:17}}>${e.newprice}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                <div ><button onClick={()=>decreament(e.id)}>-</button></div>
                <div style={{textAlign:"center", marginTop:"5px"}}><p>{e.count}</p></div>
                <div ><button onClick={()=>increament(e.id)}>+</button></div>
                </div>
                <p style={{paddingLeft:17}}>$<b>{e.total}</b></p>
                <img className="carticons-remove-icon" src={removeicon} onClick={()=>removefromcart(e.id,newarr.indexOf(e))}alt="" />
            </div>
            <hr />
        </div>
       }):
       
       <div className="cartempty" > <img src={emptycart} alt=""/>
       <h2 >Your Cart is Empty <span>!!!</span></h2>
        </div>}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">  
                    <p>Subtotal</p>
                    <p>${t}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${t-20}</h3>
                </div>
            </div>
                <Link to='/CheckOut'><button> PROCEED TO CHECKOUT </button></Link>
        </div>
       </div>
        </div>
    )
}
export default CartItems




















// newarr.indexOf(e)




// import React, { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import removeicon from '../Assets/cart_cross_icon.png';
// import './CartItems.css';
// import { Link } from "react-router-dom";
// const CartItems=()=>{
//     const {getTotalCartAmount,allproduct,cartitems,removefromcart}=useContext(ShopContext);

//     return(
//     <div className="cartitems">
//         <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//         </div>
//         <hr />
//        {allproduct.map((e)=>{
//         if(cartitems[e.id]>0){
//             return  <div>
//             <div className=" cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className="carticon-product-icon"/>
//                 <p>{e.name}</p>
//                 <p>${e.newprice}</p>
//                 <button className="cartitems-quantity">{cartitems[e.id]}</button>
//                 <p>${e.newprice*cartitems[e.id]}</p>
//                 <img className="carticons-remove-icon" src={removeicon} onClick={()=>{removefromcart(e.id)}}alt="" />
//             </div>
//             <hr />
//         </div>
//         }
//         return null;
//        })}
//        <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>Cart Total</h1>
//             <div>
//                 <div className="cartitems-total-items">
//                     <p>Subtotal</p>
//                     <p>${getTotalCartAmount()}</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-items">
//                     <p>Shipping Fee</p>
//                     <p>Free</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-items">
//                     <h3>Total</h3>
//                     <h3>${getTotalCartAmount()}</h3>
//                 </div>
//             </div>
//                 <Link to='/CheckOut'><button> PROCEED TO CHECKOUT </button></Link>
//         </div>
//        </div>
//         </div>
//     )
// }
// export default CartItems