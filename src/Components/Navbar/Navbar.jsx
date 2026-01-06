import React, { useContext, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css'
import logo from '../Assets/Banner-3.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbarr = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
       <Navbar collapseOnSelect expand="lg"  bg="primary" >
      <Container>
      <Navbar.Brand href="#home">Magical Shoppers
      
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>Magical <span style={{color:"red"}}>S</span>
        <span style={{color:"orange"}}>H</span>
        <span style={{color:"yellow"}}>O</span>
        <span style={{color:"green"}}>P</span>
        <span style={{color:"blue"}}>P</span>
        <span style={{color:"indigo"}}>E</span>
        <span style={{color:"violet"}}>R</span>
        <span style={{color:"red"}}>s</span></p>
      </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
      {  /* <Nav className="me-auto">*/}
      <Nav className="justify-content-center">
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
      <Nav.Link><li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li></Nav.Link>
      <Nav.Link> <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li></Nav.Link>
      <Nav.Link><li onClick={()=>{setMenu("womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li></Nav.Link>
      <Nav.Link><li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li></Nav.Link>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      </Nav></Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
