import React, { useState } from "react";
import data from "../data.json";
import AddItemOverlay from "./AddItemOverlay";

const CartBill = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <section className="w-[75%] flex items-center justify-center p-8">
      <div className="w-full max-w-xl bg-white border border-green-300 rounded shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-green-700">Your Cart</h3>
          <button
            className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
            type="button"
            onClick={() => setShowOverlay(true)}
          >
            Add Item
          </button>
        </div>
        <ul className="divide-y divide-green-100 mb-4">
          {data.cartItems.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between">
              <span className="text-green-900">{item.name}</span>
              <span className="text-green-500">{item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-green-200 pt-4 flex justify-between font-semibold">
          <span>Total Items</span>
          <span>{data.cartItems.length}</span>
        </div>
      </div>
      <AddItemOverlay open={showOverlay} onClose={() => setShowOverlay(false)} />
    </section>
  );
};

export default CartBill;