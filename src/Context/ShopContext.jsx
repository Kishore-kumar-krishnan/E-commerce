import react, { createContext, useState } from 'react'
import allproduct from '../Components/Assets/allproduct'

export const ShopContext=createContext(null);
const  ShopContextProvider=(props)=>{
   const contextValue={allproduct};
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;
    






















// import react, { createContext, useState } from 'react'
// import allproduct from '../Components/Assets/allproduct'

// export const ShopContext=createContext(null);

// const getDefaultCart=()=>{
//     let cart={};
//     for(let i=0;i<allproduct.length+1;i++){
//     cart[i]=0;
//     }
// return cart;
// }
    

// const  ShopContextProvider=(props)=>{
//     const [cartitems,setcartitems]=useState(getDefaultCart());

//     const addtocart=(itemId)=>{
//         setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//         console.log(cartitems);
//     }
//     const removefromcart=(itemId)=>{
//         setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
     
//     const getTotalCartAmount=()=>{
//         let totalamount=0;
//         for(const item in cartitems){
//             if(cartitems[item]>0){
//                 let iteminfo=allproduct.find((product)=>product.id===Number(item));
//                 totalamount += iteminfo.newprice*cartitems[item];
//             }
//         }
//         return totalamount;
//     }
//     const getTotalCartItems=()=>{
//         let totalitem=0;
//         for(const item in cartitems)
//         {
//             if(cartitems[item]>0)
//             {
//                 totalitem+=cartitems[item];
//             }
//         }
//         return totalitem;
//     }


//     const contextValue={getTotalCartItems,getTotalCartAmount,allproduct,cartitems,addtocart,removefromcart};
// return(
//     <ShopContext.Provider value={contextValue}>
//         {props.children}
//     </ShopContext.Provider>
// )
// }
// export default ShopContextProvider;
    
