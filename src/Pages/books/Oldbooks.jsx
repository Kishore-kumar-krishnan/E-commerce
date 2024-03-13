import React, { useContext, useState } from 'react'
import './ShopCategory.css'
import Allproduct from '../../Components/Assets/allproduct'
import { ShopContext } from '../../Context/ShopContext'
import dropimg from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import oldbanner from '../../Components/Assets/oldbanner.png'
 export const ShopCategory = (props) => {
    let data=Allproduct;
    console.log(data);
    let count=0;
    // Searching Element
    const [search,setsearch]=useState("");
    const [fil,setfil]=useState(data);
    const handlechange=(event)=>{
        setsearch(event.target.value);
        console.log(event.target.value);
        let k=fil.filter((i)=>{
          if(search==""){
            return i;
          }
          else{
            return i.name.startsWith(search) || i.name.match(search) || i.name.includes(search);
          }
        })
        setfil(k);
    }


    // sortby Element
    const op=[
        'Michelle Obama',
        'Tara Westover',
        'Trevor Noah',
        'Ashneer Grover',
        'Harper Lee'
    ]
    const change=(event)=>{
        let a=data.filter((i)=>{
            return event.target.value==i.author;
        })
        setfil(a);
    }

  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={oldbanner} alt="" />
        <div className="shopcategory-indexSort">
           <input type="text" placeholder='Search here!!!...' onChange={handlechange}/>
             <div className="shopcategory-sort" >
                <select name="Sort by"onChange={change} >
                    <option>Select author</option>
                    {op.map((value,i)=>{
                       return  <option key={i}>{value} </option>
                    })}
                </select>

            </div> 
        </div>
        <div className="shopcategory-products">
            {fil.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} author={item.author} image={item.image} newprice={item.newprice} oldprice={item.oldprice} count={item.count} total={item.total}/>
                }
                else{
                  return null;
                }
                })}
        </div>
        {/* <div className="shopcategory-loadmore">
            Explore more
        </div> */}
    </div>
  ) 
}

export default ShopCategory