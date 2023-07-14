import React from "react";

export default function Cart(props) {
  let bill = props.cart.map((item, i) => item.price * item.quantity);
  const handlePayNow = () => {
    alert("Thank you for ordering the product!");
  };
  return (
    <div className="cart-parent">
      <div className="cart">
        Cart
        {props.cart.map((item, i) => (
          <div key={i} className="cart-child">
            <li>Product Name:{item.name}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Price: {item.price * item.quantity}</li>
          </div>
        ))}
      </div>
      <div className="Final-Bill">
      <h1>Total</h1>
        <h2>Rs {bill.reduce((i, j) => i + j, 0)}</h2>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handlePayNow}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
