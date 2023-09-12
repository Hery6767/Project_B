import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import "./Head.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartApp'
function Header({filter,setFilter}) {
    const {cart}  = useContext(CartContext);
    const [cakeInCart, setCakeInCart] = useState();
    
    const totalProducts = cart.length;
    useEffect (() => {
        setCakeInCart(totalProducts)
        },[totalProducts])
        
    
    return (
        <div>
            <header className='header'>
                <div className='search'>
                    <input onChange={(e) => setFilter(e.target.value)} value={filter} type='text' placeholder='Search' />
                </div>
                <div className='logo'>
                    <img src="../src/image/logo.png" />
                    <h2> Cake • bake </h2>
                </div>
                <div className='login'>
                <img src="../src/image/next.png"/>
                <h3>Login</h3>
                </div>
                <div className='cart'>
                <Link to="/cart"> <img src="../src/image/shopping-bag.png"/></Link>
                 <Link to="/cart"> <h3>Cart {cakeInCart} </h3></Link> 
                
                </div>
            </header>
            <Nav />
        </div>
    )
}

export default Header 