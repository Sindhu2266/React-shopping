import React from 'react'
import Corousel from '../Components/Corousel';
import './css/content.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


function Home() {
  return (
    <div>
<ProgressBar animated now={100} />
<Corousel/>
<div className='content'>
<Popular/> 
<Offers/>
<NewCollections/>
<NewsLetter/>

</div>
    </div>
  )
}

export default Home