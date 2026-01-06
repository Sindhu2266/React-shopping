import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'






const Popular =()=> {
 
  
  return (
    
    <div>

<div className='popularr'>
      <h1>POPULAR IN WOMEN</h1>
      </div>
      <div className='popular'>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    </div>
  )
}

export default Popular