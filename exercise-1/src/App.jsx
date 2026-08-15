import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity((num) => num + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((num) => (num > 1 ? num - 1 : 1));
  }

  return (
    <>
      <h2>Laptop</h2>
      <p>Price: $1000</p>
      <button onClick={handleDecreaseQuantity}>-</button>
      <button onClick={handleIncreaseQuantity}>+</button>
      <p>Quantity:{quantity}</p>
      <p>Total:${1000 * quantity} </p>
    </>
  );
}

export default App;
