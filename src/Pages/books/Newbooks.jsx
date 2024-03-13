import React, { useContext, useState } from 'react'
import './Newbooks.css'
import Allproduct from '../../Components/Assets/allproduct'
import { ShopContext } from '../../Context/ShopContext'
import dropimg from '../../Components/Assets/dropdown_icon.png'
import newbanner from '../../Components/Assets/newbanner.jpg';
import Item from '../../Components/Item/Item'
 export const Newbooks = (props) => {
    let data=Allproduct;
    console.log(data);
   let arr=[2,5,10,11];
    // const {allproduct}=useContext(ShopContext);

    // Searching Element
    const [newsearch,setnewsearch]=useState("");
    const [newfil,setnewfil]=useState(data);
    const handlechange=(event)=>{
        setnewsearch(event.target.value);
        let k=newfil.filter((i)=>{
          if(newsearch==""){
            return i;
          }
          else{
            return i.name.startsWith(newsearch) || i.name.match(newsearch) || i.name.includes(newsearch);
          }
        })
        setnewfil(k);
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
        setnewfil(a);
    }

  return (
    <div className='shop'>
        <img className='shop-banner' src={newbanner} alt="" />
        <div className="shop-indexSort">
           <input type="text" placeholder='Search here!!!...' onChange={handlechange}/>
             <div className="shop-sort" >
                <select name="Sort by"onChange={change} >
                    <option>Select author</option>
                    {op.map((value,i)=>{
                       return  <option key={i}>{value} </option>
                    })}
                </select>

            </div> 
        </div>
        <div className="shopcategory-products">

            {newfil.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} author={item.author} image={item.image} newprice={item.newprice} oldprice={item.oldprice} count={item.count} total={item.total}/>
                  }
               
                // return null;
                }
                )}
        </div>
        {/* <div className="shopcategory-loadmore">
            Explore more
        </div> */}
    </div>
  ) 
}

export default Newbooks