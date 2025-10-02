"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4">
      <p className="text-xl font-sans text-white">
        Quantity: <span className="font-semibold text-2xl">{quantity}</span>
      </p>
      <div className="flex">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="w-16 bg-red-500 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
        >
          –
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="w-16 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded ml-4"
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-400">Allowed range: 1-20</p>
    </div>
  );
}
