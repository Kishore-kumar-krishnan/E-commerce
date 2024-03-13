import React from "react";
import './RelatedProduct.css'
import dataproduct from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts=(props)=>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {dataproduct.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} author={item.author} image={item.image} newprice={item.newprice} oldprice={item.oldprice} count={item.count} total={item.total}/>
                })}
            </div>
        </div>
    )
}
export default RelatedProducts