import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "../carrito.png";
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      <strong>3</strong>
    </div>
  )
}

export default CartWidget