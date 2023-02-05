import React from 'react'
import "./itemcounter.css"


function ItemCounterCart({amount, decrementCount, incrementCount}) {
  return (
    <div className="itemCounter_container">
      <div className="amount-toggle">
        <button className="button-counter" onClick={() => decrementCount()}>-</button>
          <div className="amount-style">{amount}</div>
        <button className="button-counter" onClick={() => incrementCount()}>+</button>
      </div>
    </div>
  )
}

export default ItemCounterCart
