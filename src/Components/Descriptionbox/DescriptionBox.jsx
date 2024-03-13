import { useState } from 'react'
import './DescriptionBox.css'
const DescriptionBox = (props) => {
  const{product}=props;
const [des,setdes]=useState("description");
  // const reviews=()=>{
  //   setdes("reviews");
  // }

  return (
    <div className='description'>
        <div className='description-navigator'>
            <div className='description-nav-box'><button className='des-but' onClick={()=>{setdes("description")}}style={{border:"none"}}>Description</button></div>
         <div className='review'style={{display:"flex"}}><button className='rev-but'onClick={()=>{setdes("reviews")}}style={{border:"none"}}>Reviews </button>
         <p style={{marginTop:24}}>({product.reviews})</p>  </div>  
        </div>
        <div className='description-description'>
         { des==="description"?product.summary:<h1>NO Reviews Yet!!!</h1>}
           </div>
    </div>
  )
}

export default DescriptionBox