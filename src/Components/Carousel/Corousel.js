import React from 'react'
//import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
//import freepik1 from './images/freepik1.jpg'
import freepik2 from './images/freepik4.jpg'
import freepik3 from './images/freepik3.jpg'
//import freepik4 from './images/freepik4.png'
import freepik6 from './images/freepik6.jpg'
import freepik7 from './images/freepik7.jpg'
import freepik9 from './images/freepik9.jpg'

import { Link } from "react-router-dom";
import './Carousel.css';


function Corousel() {

  /*const carbox = {  
    paddingTop: '30px',
    paddingBottom: '30px'
 }  */
    const dancingScriptStyle = {
      fontFamily: "'Dancing Script', cursive",
      wordSpacing: '10px'
    };

  return (
    <div className='carbox'>

         <Carousel >
         
      

      <Carousel.Item interval={3000}>
      <img style={{height:'70vh', backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          src={freepik6}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='cartext2' >New Arrivals</div>
          <div className='cartext2' style={dancingScriptStyle}><span className='cartext2_w'>Vibrant Elegance</span></div>
          <Link to="/mens">
          <button className='carbutton_right'style={dancingScriptStyle}>Check Out {">>>>"}</button>
        </Link></Carousel.Caption>
      </Carousel.Item>



<Carousel.Item interval={3000}>
      <img style={{height:'70vh', backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          src={freepik2}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='cartext1' style={dancingScriptStyle}><span className='cartext1_w'>What's Trending in....</span></div>
          <Link to="/womens">
          <button className='carbutton'style={dancingScriptStyle}>Check Out {">>>>"}</button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>





      
      <Carousel.Item interval={3000}>
      <img style={{height:'70vh', backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          src={freepik3}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='cartext2' > TRENDY</div>
          <div className='cartext2' style={dancingScriptStyle}><span className='cartext2_w'>Fresh in Fashion</span></div>
          <Link to="/womens">
          <button className='carbutton_right'style={dancingScriptStyle}>Check Out {">>>>"}</button>
       </Link> </Carousel.Caption>
      </Carousel.Item>


<Carousel.Item interval={3000}>
      <img style={{height:'70vh', backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          src={freepik7}
          alt="First slide"
        />
        <Carousel.Caption>
        
        
          
         <Link to="/mens">
          <button className='carbutton_right'style={dancingScriptStyle}>Check Out {">>>>"}</button>
       </Link>
        </Carousel.Caption>

      </Carousel.Item>




<Carousel.Item interval={3000}>
      <img style={{height:'70vh', backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
          src={freepik9}
          alt="First slide"
        />
        <Carousel.Caption>
          
          <Link to="/womens">
          <button className='carbutton'style={dancingScriptStyle}>Check Out {">>>>"}</button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

   
    </div>
  )
}

export default Corousel