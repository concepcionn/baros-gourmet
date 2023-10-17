import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import "./styles.css"

const CartWidget = () => {
  return (
    <div className='cart-component'>
        <Icon.Cart/>
        <span>3</span>
    </div>
  )
}

export default CartWidget