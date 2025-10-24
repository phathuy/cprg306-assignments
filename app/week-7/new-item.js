"use client";
import { useState } from "react";

/*Next, our attention shifts to new-item.js. 
We'll be enhancing this component by introducing a new prop 
and redefining its behavior upon form submission. 
Rather than triggering an alert, 
it will now invoke the onAddItem prop, 
passing along the item object.

Add a new prop { onAddItem }.
Replace the alert functionality by calling the onAddItem prop with the item object when the form is submitted. The item object should have the following properties: id, name, quantity, and category. id should be a random string.*/

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Item object
    // generate random id of 16 characters
    const item = {
      id: Math.random().toString(36).substring(2, 18),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4"
    >
      {/* Item Name */}
      <div className="flex flex-col space-y-2">
        <label className="text-white text-xl font-sans">Item name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="p-2 rounded bg-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Item name"
        />
      </div>

      {/* Quantity */}
      <div className="flex flex-col space-y-2">
        <p className="text-xl font-sans text-white">
          Quantity: <span className="font-semibold text-2xl">{quantity}</span>
        </p>
        <div className="flex">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="w-16 bg-red-500 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
          >
            –
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="w-16 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded ml-4"
          >
            +
          </button>
        </div>
        <p className="text-sm text-gray-400">Allowed range: 1–20</p>
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-white text-xl font-sans">Category:</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* "Add item" submit button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Item
      </button>
    </form>
  );
}
