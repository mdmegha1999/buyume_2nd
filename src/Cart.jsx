import React from "react";

export default function Cart(props) {
  let bill = props.cart.map((item, i) => item.price * item.quantity);
  const handlePayNow = () => {
    alert("Thank you for ordering the product!");
  };
  return (
    <div className="cart-parent">
      <h1>Cart</h1>
      <div className="cart">
        {props.cart.map((item, i) => (
          <div key={i} className="cart-child">
            <li>Product Name:{item.name}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Price: {item.price * item.quantity}</li>
          </div>
        ))}
      </div>
      <div className="Final-Bill">
        <h2>Total Amount</h2>
        <h2>
          Rs {bill.reduce((i, j) => i + j, 0)}
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={handlePayNow}
          >
            Pay Now
          </button>
        </h2>
      </div>
    </div>
  );
}
