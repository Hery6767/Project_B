import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
    <Link to='/'><h2 className='space'>Oder from our bakery</h2></Link>
    <Link to='/gifShop'><h2>Gift shop</h2></Link>
    <Link to='/restaurant'><h2  className='space'>Restaurant & Reservations</h2></Link>
    <Link to='/aboutUs'><h2>About us</h2></Link>
    </div>
  )
}

export default Nav