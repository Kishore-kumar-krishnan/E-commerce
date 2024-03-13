import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProduct';
import Allproduct from '../Components/Assets/allproduct';

export const Product = () => {
    const{productId}=useParams();
    const product=Allproduct.find((e)=>e.id===Number(productId));
  return (
    <div className=''>
        {/* <Breadcrum product={product}/> */}
        <ProductDisplay product={product}/>
        <DescriptionBox  product={product} />
        <RelatedProducts product ={product}/>
    </div>
  )
}
export default Product