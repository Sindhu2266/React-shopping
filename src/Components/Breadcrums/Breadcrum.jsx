import React from 'react'
import './Breadcrum.css'
//import arrow_icon from '../Assets/breadcrum_arrow.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";



const Breadcrum = (props) => {
    const {product} = props;

const category = product?.category?.toLowerCase();

  // Dynamically decide the link
  const categoryLink =
    category === "men"
      ? "/mens"
      : category === "women"
      ? "/womens"
      : "/kids"; // fallback



  return (
    <Breadcrumb>
    <div className='breadcrum'>
  { /*<Breadcrumb.Item href="#" color='black'> Home</Breadcrumb.Item>  */}
    
    

 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
       Shop
      </Breadcrumb.Item>


    {/* Conditional category link */}
      {product?.category && (
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: categoryLink }}>
          {product.category}
        </Breadcrumb.Item>
      )}

      {/* Product name (active breadcrumb) */}
      {product?.name && (
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      )}

    </div>
    </Breadcrumb>
  )
}

export default Breadcrum
