import React, { useContext, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css'
import logo from '../Assets/Banner-3.png'
import cart_icon from '../Assets/cart_icon.png'
//import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'




const Navbarr = () => {

    const dancingScriptStyle = {
        fontSize: '39px',
        fontFamily: "'Dancing Script', cursive",
        wordSpacing: '10px',
        color: '#22b2b'
      };

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

   {/*  const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }*/}



  return (
    
    <div>
      
      

       <Navbar collapseOnSelect expand="lg"   >
               
      <Container>
        <div className='Boutline'>
      <Navbar.Brand href="#home">
      
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt="" />
        
       {/* <h1 style={dancingScriptStyle} >
        <span style={{color:"#00BFFF", fontSize:'40px'}}>M</span>
            agica<span style={{color:"#FF00FF"}}>l</span>
             <span style={{color:"#FF00FF", fontSize:'40px'}}> S</span>
            hopper<span style={{color:"#00BFFF"}}>s</span></h1>*/}


            <h1 style={dancingScriptStyle} >
        <span style={{color:"#d24b03ff", fontSize:'40px'}}>M</span>
            agica<span style={{color:"#d24b03ff"}}>l</span>
             <span style={{color:"#d24b03ff", fontSize:'40px'}}> S</span>
            hopper<span style={{color:"#d24b03ff"}}>s</span></h1>
      </Link></Navbar.Brand></div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={menuRef} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
      {/*<img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} >*/}
      
      <Nav.Link><li onClick={()=>{setMenu("shop")}}><Link to='/'>SHOP</Link></li></Nav.Link>
      <Nav.Link> <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>MEN</Link></li></Nav.Link>
      <Nav.Link><li onClick={()=>{setMenu("womens")}}><Link to="womens">WOMEN</Link></li></Nav.Link>
      <Nav.Link><li onClick={()=>{setMenu("kids")}}><Link to='/kids'>KIDS</Link></li></Nav.Link>
      <Nav.Link><li ><Link to='/login'>LOGIN</Link></li></Nav.Link>
       <Nav.Link> <div className="nav-login-cart">
            <Link to='/cart'><span className='nav-cart-count'>{getTotalCartItems()}</span><img src={cart_icon} alt="" /></Link>
            </div></Nav.Link>
      {/*</ul>
      <div className="nav-login-cart">
        <Nav.Link><Link to='/login'><button>Login</button></Link></Nav.Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>*/}
      </Nav>
     
      </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
