import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setquantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
      setDescription("");
      setquantity(1);
      onAddItems(newItem);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <p>What do you need for your 😍 trip</p>
        <select
          value={quantity}
          onChange={(e) => setquantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
            <option value={num} key={i}>
              {num}
            </option>
          ))}
          {/* this will return an array of length 20 starting from 1to 20 */}
        </select>
        <input
          type="text"
          placeholder="items..."
          value={description}
          onChange={(e) => {
            // console.log(e.target)
            setDescription(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    );
  }