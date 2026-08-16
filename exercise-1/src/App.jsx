import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  return (
    <div>
      <p>
        Name:{" "}
        <input type="text" value={name} onChange={handleNameChange} required />
        Character: {name.length}
      </p>
      <p>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </p>
      <p>
        Age:{" "}
        <input type="number" value={age} onChange={handleAgeChange} required />
      </p>
    </div>
  );
}

export default App;
