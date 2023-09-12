import { createContext } from "react";
import { listCake } from "../components/Content/OderFromOurBakery/ListCake";
import React from 'react'

export const CartContext = createContext(null) 

const CartApp = ({ children }) => {
    const currentCart =JSON.parse(localStorage.getItem('cart'))
    const setCakeInCartHandler = (cakeID, optionIndex, quantity, pricePerOne) => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const currentIndex = cart.findIndex(item => {
            return item.cakeID === cakeID && item.optionIndex === optionIndex
        })
        if (currentIndex === -1) {
            const newItem = {
                cakeID: cakeID,
                optionIndex: optionIndex,
                quantity: quantity,
                total: quantity * pricePerOne
            }
            cart.push(newItem)
            const newCart = JSON.stringify(cart)
            localStorage.setItem('cart', newCart)
        } else {
            const currentItem = cart[currentIndex]
            const newItem = {
                ...currentItem,
                quantity: currentItem.quantity + quantity,
                total: (currentItem.quantity + quantity) * pricePerOne
            }
            cart[currentIndex] = newItem
            const newCart = JSON.stringify(cart)
            localStorage.setItem('cart', newCart)
        }
    }
    return (
        <CartContext.Provider value={{
            cart: currentCart,
            getCart:()=>{
return JSON.parse(localStorage.getItem('cart'))
            },
            setCart:setCakeInCartHandler
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartApp