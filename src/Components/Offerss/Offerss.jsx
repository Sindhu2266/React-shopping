import React from 'react'
import './Offerss.css'
//import exclusive_image from '../Assets/Banner-2.png'
import exclusive_image from '../Assets/family.png'

const Offerss = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>New Collections</h1>
        <h2>#DENIMFANTASY</h2>
        <p>UPTO 50% DISCOUNT ON ALL PRODUCTS FOR A LIMITED TIME!</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offerss
