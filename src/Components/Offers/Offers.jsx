import React from 'react'
import './Offers.css'
//import exclusive_image from '../Assets/Banner-2.png'
import exclusive_image from '../Assets/men/m3.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <h2>UPTO 30% OFF</h2>
        <p>ONLY ON ONLINE PURCHASES</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
