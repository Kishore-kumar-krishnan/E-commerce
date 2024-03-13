import React from 'react'
import './Breadcrum.css'
import arrowicon from '../Assets/breadcrum_arrow.png'
export const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        SHOP <img src={arrowicon} alt="" />{product.category} <img src={arrowicon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum