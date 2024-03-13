import React from 'react'
import './Popular.css'
import dataproduct from '../Assets/data'
import Item from '../Item/Item'
export default function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN OLDBOOKS </h1>
      <hr />
      <div className="popular-item">
        {dataproduct.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} author={item.author} image={item.image} newprice={item.newprice} oldprice={item.oldprice} count={item.count} total={item.total} />
        })}
      </div>
    </div>
  )
}
