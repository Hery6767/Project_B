
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import OderFromOurBakery from './components/Content/OderFromOurBakery'
import Bakery from './components/Content/OderFromOurBakery/CakeItem/Bakery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Header/Cart';
import { listCake } from './components/Content/OderFromOurBakery/ListCake';
import { useEffect, useState } from 'react';
function App() {
  useEffect(() => {
    const currentCart = localStorage.getItem('cart') || null
    if (!currentCart) {
      localStorage.setItem('cart', '[]')
    }
  }, [])
  
  // { cakeID,optionIndex,quantity,total
  // }

  

  return (
    <div >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Noto+Serif+Display&family=Quicksand:wght@400&family=Montserrat:wght@300&display=swap');
      </style>
      <Router>
        <Header  />
        <Routes>
          <Route path='/cart' element={<Cart  listCake={listCake} />} />
          <Route path='/' element={<OderFromOurBakery listCake={listCake} />} />
          <Route path='/bakery/:cakeId' element={<Bakery listCake={listCake}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
