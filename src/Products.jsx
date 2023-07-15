import React, { useState } from "react";
import Cart from "./Cart";
import "./Products.css";

export default function Products() {
  const [Products, setProducts] = useState([
    {
      id: 1,
      name: "Product-1",
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      name: "Product-2",
      price: 200,
      quantity: 1
    },
    {
      id: 3,
      name: "Product-3",
      price: 300,
      quantity: 1
    }
  ]);
  const [cart, setCart] = useState([]);
  const add_pro = (index) => {
    const updatedProducts = [...Products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };
  const less_pro = (index) => {
    const updatedProducts = [...Products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      updatedProducts[itemIndex].addedToCart = false; // Reset the addedToCart property
      setProducts(updatedProducts);
    }
  };
   const resetProductQuantity = (itemId) => {
    const updatedProducts = [...Products];
    const itemIndex = updatedProducts.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      updatedProducts[itemIndex].quantity = 1;
      setProducts(updatedProducts);
    }
  };

  const addToCart = (obj) => {
    if (cart.includes(obj)) {
      alert("Already added to cart");
    } else {
      const updatedProducts = [...Products];
      const itemIndex = updatedProducts.findIndex((item) => item.id === obj.id);
      if (itemIndex !== -1) {
        updatedProducts[itemIndex].addedToCart = true; // Set addedToCart to true
        setProducts(updatedProducts);
      }
      setCart([...cart, obj]);
    }
  };
  return (
    <div className="Products">
      <div>
        <h1 className="pro_header">Products</h1>
        {Products.map((item, i) => (
          <div key={i} className="Products-child">
            <li>Product Name: {item.name}</li>
            <li>Price: {item.price}</li>
            <li>
              {" "}
              <button onClick={() => add_pro(i)}>+</button> {item.quantity}{" "}
              <button onClick={() => less_pro(i)}>-</button>
              {""}
            </li>
            {!item.addedToCart && (
            <button className="addbtn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
            )}
          </div>
        ))}
      </div>
      <div>
        <Cart
          cart={cart}
          setCart={setCart}
          resetProductQuantity={resetProductQuantity}
        />
      </div>
    </div>
  );
}
