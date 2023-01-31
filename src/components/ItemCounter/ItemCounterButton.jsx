import React from 'react'

function ItemCounterButton(props) {
  return (
    <div>
        <div>
            <button click={() => onAddToCart(count)}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCounterButton
