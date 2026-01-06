import React from 'react'
import './Trendingmen.css'
import data_product from '../Assets/data_men'

import Item from '../Item/Item'

const Trendingmen = () => {
  return (
    <div>
    <div className='Trending_mens'>
      <h1>TRENDING MEN</h1>
      </div>
      
      <div className='Trending_men'>
      <div className="collections">
        { data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div></div>
  )
}

export default Trendingmen
