import React from 'react'
import './CakeItems.css'
import {Link} from 'react-router-dom'
function CakeItems(props) {
  const {listCake} = props
  return (
    <div className='item'>
   <figure><Link to={`/bakery/${listCake.name}`} state={listCake.id} > <img src={listCake.image}/></Link></figure>
    <h3>{listCake.name}</h3>
    <p>from ${listCake.price}.00</p>
    </div>
  )
}

export default CakeItems