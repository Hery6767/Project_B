import React from 'react'
import "./Title.css"
function Title() {
  return (
    <div className='title'>
    <div className='background'>
    <video src={"../../../../src/image/videoBg.mp4"} controls loop muted/>
    <h1>Bakery</h1></div>
    <div className='note'>
    <div className='noteBox'>
    <p>Each and every dessert is made by hand from scratch, therefore we will require notice for all order. 
    If you order for local pick up delivery, each location require a different notice -- 
    Carmel City Center requires 48 hours notice and Broad Ripple Village require 72 hours notice.
    For shipping, all orders require a five (5) days notice. Shipping fees will at check out.</p>
    </div></div>
    </div>
  )
}

export default Title