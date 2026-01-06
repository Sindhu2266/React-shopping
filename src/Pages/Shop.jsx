import React from 'react'
//import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Offerss from '../Components/Offerss/Offerss'
import NewCollections from '../Components/NewCollections/NewCollections'
import Trendingmen from '../Components/Trendingmen/Trendingmen';
import Corousel from '../Components/Carousel/Corousel';
import Container from 'react-bootstrap/Container';

const Shop = () => {
  return (
    <div>
      <Container>    
<Container fluid>
<Corousel/>
     { /*<Hero/>*/}
      <Popular/>
      <Offers/>
      <NewCollections/>
            <Offerss/>
            <Trendingmen/>
      </Container>
      </Container>
    </div>
  )
}

export default Shop
