import React, { useEffect } from 'react'
import './NewCollections.css'
import NewCollection from '../Assets/newcollections'
import Item from '../Item/Item'
export default function NewCollections(){
  useEffect(()=>{
    console.log("punda"+JSON.stringify(Item))
  },[])
 
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {NewCollection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name}  author={item.author} image={item.image} newprice={item.newprice} oldprice={item.oldprice} count={item.count} total={item.total}/>
            })}
        </div>
    </div>
  )
}

