import React from "react";

export default function Cart(props) {
  const { cart, removeProduct, add_pro, less_pro } = props;
  let bill = cart.map((item, i) => item.price * item.quantity).reduce((i, j) => i + j, 0)

  return (
    <div className="cart-parent">
      <h1>Cart</h1>
      <div className="cart">
        {cart.map((item, i) => (
          <div key={i} className="cart-child">
            <li>Product Name:{item.name}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Price: {item.price * item.quantity}</li>

            {item.quantity == 1 ? <button onClick={() => removeProduct(item.id)} style={{ background: 'red', color: 'white' }}>Remove</button> : null}
            {item.quantity > 1 ? <button onClick={() => less_pro(item)} >-</button> : null}
            <span > {item.quantity || 0}</span>
            <button onClick={() => add_pro(item)} >+</button>
            {item.quantity > 1 ? <button onClick={() => removeProduct(item.id)} style={{ background: 'red', color: 'white' }}>Remove</button> : null}

          </div>
        ))}
      </div>
      {cart.length > 0 ? <div className="Final-Bill">
        <h2>Total Amount</h2>
        <h2>
          Rs {bill}
          <button
            onClick={() => alert('thanks for your order')}
          >
            Pay Now
          </button>
        </h2>
      </div>
        : 'No products in your cart !'}
    </div >
  );
}
