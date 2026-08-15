import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Laptop",
      price: 1000,
      quantity: 0,
    },
    { name: "Phone", price: 500, quantity: 0 },
    { name: "Headphones", price: 100, quantity: 0 },
  ]);

  function handleIncreaseQuantity(index) {
    setProducts((currentProducts) => {
      const newProducts = [...currentProducts];
      newProducts[index] = {
        ...newProducts[index],
        quantity: newProducts[index].quantity + 1,
      };
      return newProducts;
    });
  }

  function handleDecreaseQuantity(quantity) {
    setProducts((num) => (quantity > 1 ? num - 1 : 1));
  }

  return (
    <>
      {products.map((item, indexOf) => {
        return (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <button onClick={handleDecreaseQuantity}>-</button>
            <button onClick={() => handleIncreaseQuantity(indexOf)}>+</button>
          </div>
        );
      })}
      <p>Total:${1000} </p>
    </>
  );
}

export default App;
