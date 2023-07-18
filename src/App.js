import React, { useState } from "react";
import Cart from "./Cart";
import "./Products.css";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product-1",
      price: 100,
    },
    {
      id: 2,
      name: "Product-2",
      price: 200,
    },
    {
      id: 3,
      name: "Product-3",
      price: 300,
    }
  ]
  const [cart, setCart] = useState([]);


  const add_pro = (product) => {
    let updatedCart = cart.map((item) => item.id == product.id ? ({ ...item, quantity: item.quantity + 1 }) : item)
    setCart(updatedCart)
  };

  const less_pro = (product) => {
    let updatedCart = cart.map((item, id) => item.id == product.id ? ({ ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }) : item)
    setCart(updatedCart)
  }


  const removeProduct = (productId) => {
    let updatedCart = cart.filter((item) => item.id != productId)
    setCart(updatedCart)
  };

  const addToCart = (product) => {
    setCart((prev) => ([
      ...prev,
      {
        ...product,
        quantity: 1
      }
    ]))
  };
  return (
    <div className="Products">
      <div>
        <h1 className="pro_header">Products</h1>
        {products.map((item, i) => (
          <div key={i} className="Products-child">
            <div>Product Name: {item.name}</div>
            <div>Price: {item.price}</div>

            {cart.filter((pro) => pro.id == item.id).length > 0 ?
              <>
                {cart.filter((pro) => pro.id == item.id)[0].quantity == 1 ?
                  <button onClick={() => removeProduct(item.id)} style={{ background: 'red', color: 'white' }}>Remove</button> :
                  <button onClick={() => less_pro(item)} >-</button>}
                <span > {cart.filter((pro) => pro.id == item.id)[0].quantity || 0}</span>
                <button onClick={() => add_pro(item)} >+</button>
              </>
              :
              <button className="addbtn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>}
          </div>
        ))}
      </div>
      <div>
        <Cart
          cart={cart}
          removeProduct={removeProduct}
          add_pro={add_pro}
          less_pro={less_pro}
        />
      </div>
    </div>
  );
}
