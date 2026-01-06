import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook-icon.png'


const Footer = () => {

  const dancingScriptStyle = {
    fontSize: '29px',
    fontFamily: "'Dancing Script', cursive",
    wordSpacing: '10px'
  };
 
  
  return (
    
  <footer class="footer">
  <div class="footer-top">
    <h2 class="company-name"><h1 style={dancingScriptStyle}>
        <span style={{color:"#d24b03ff"}}>M</span>
            agical <span style={{color:"#d24b03ff"}}> S</span>
            hoppers</h1></h2>
  </div>
  
  <div class="footer-bottom">
    <div class="footer-section">
   <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
 <li><a href="#">Kids</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
     
      <ul>
        <li> <span className='footer-social-icon'><img src={facebook_icon} width="32"/></span>
          <a href="#">Facebook</a>
          </li>
        <li> <span className='footer-social-icon'><img src={instagram_icon} width="32"/></span>
          <a href="#">Instagram</a></li>
                <li>
                  <span className='footer-social-icon'><img src={whatsapp_icon} width="30"/></span>
                  <a href="#">Whatsapp</a></li>


      </ul>
    </div>
    <div class="footer-section">
      
     
       <h1>Get Exclusive Offers On Your Email</h1><p>
      <p>Subscribe to our newletter and stay updated</p>
      <p>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button></p>
     </p>
    </div>
  </div>


      
      <div className="footer-copyright">
        <hr />
        <p>Magical Shoppers @ {new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer
