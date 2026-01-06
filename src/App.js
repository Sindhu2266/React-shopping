import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbarr from './Components/Navbar/Navbarr';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Footer from './Components/Footer/Footer';
import Corousel from './Components/Carousel/Corousel';


import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';


import menn_banner from './Components/Assets/banner_menn.png'
import women_banner from './Components/Assets/banner_wom.png'
import kid_banner from './Components/Assets/banner_kids.png'



function App() {
  return (
  
          <BrowserRouter>
          <div id="top_b">HURRY HURRY UP............... Grab the Flat 200 OFF*. CODE : FESTIVE200</div>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={menn_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path="/Corousel"  element={<Corousel/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    
      
    
       


  );
}

export default App;
