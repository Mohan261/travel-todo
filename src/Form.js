import React, { useState } from "react";
import "./Form.css";
const Form = ({ addItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { product, quantity, packed: false, id: Date.now() };
    addItems(newItem);
    setQuantity(1);
    setProduct("");
  };
  return (
    <div className="container">
      <form className="form-sec" onSubmit={handleSubmit}>
        <p>What do you need for your trip ?</p>
        <select
          className="select"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="input"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <button className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Form;
