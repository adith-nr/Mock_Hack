import React, { useState } from "react";
import data from "../data.json";
import AddItemOverlay from "./AddItemOverlay";

const CartBill = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [cartItems, setCartItems] = useState(data.cartItems);
  const [editIdx, setEditIdx] = useState(null);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleRemove = (idxToRemove) => {
    setCartItems(cartItems.filter((_, idx) => idx !== idxToRemove));
  };

  const handleEditStart = (idx, field, value) => {
    setEditIdx(idx);
    setEditField(field);
    setEditValue(value);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = (idx) => {
    if (editField && editValue.trim() !== "") {
      const updated = cartItems.map((item, i) =>
        i === idx ? { ...item, [editField]: editValue } : item
      );
      setCartItems(updated);
    }
    setEditIdx(null);
    setEditField(null);
    setEditValue("");
  };

  const handleEditKeyDown = (e, idx) => {
    if (e.key === "Enter") {
      handleEditSave(idx);
    } else if (e.key === "Escape") {
      setEditIdx(null);
      setEditField(null);
      setEditValue("");
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-white border border-green-300 rounded shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-green-700">Your Pantry</h3>
          <button
            className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
            type="button"
            onClick={() => setShowOverlay(true)}
          >
            Add Item
          </button>
        </div>
        <ul className="divide-y divide-green-100 mb-4">
          {cartItems.map((item, idx) => (
            <li key={idx} className="py-2 flex items-center justify-between">
              <button
                className="mr-3 text-red-600 font-bold text-lg hover:bg-red-100 rounded-full w-7 h-7 flex items-center justify-center"
                onClick={() => handleRemove(idx)}
                title="Remove"
                type="button"
              >
                –
              </button>
              {/* Editable Name */}
              <span
                className={`flex-1 text-green-900 cursor-pointer px-1 rounded ${
                  editIdx === idx && editField === "name" ? "" : "hover:bg-green-50"
                }`}
                onClick={() => handleEditStart(idx, "name", item.name)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEditStart(idx, "name", item.name);
                }}
              >
                {editIdx === idx && editField === "name" ? (
                  <input
                    type="text"
                    value={editValue}
                    autoFocus
                    onChange={handleEditChange}
                    onBlur={() => handleEditSave(idx)}
                    onKeyDown={(e) => handleEditKeyDown(e, idx)}
                    className="border border-green-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  item.name
                )}
              </span>
              {/* Editable Quantity */}
              <span
                className={`text-green-500 cursor-pointer px-1 rounded ${
                  editIdx === idx && editField === "quantity" ? "" : "hover:bg-green-50"
                }`}
                onClick={() => handleEditStart(idx, "quantity", item.quantity)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEditStart(idx, "quantity", item.quantity);
                }}
              >
                {editIdx === idx && editField === "quantity" ? (
                  <input
                    type="text"
                    value={editValue}
                    autoFocus
                    onChange={handleEditChange}
                    onBlur={() => handleEditSave(idx)}
                    onKeyDown={(e) => handleEditKeyDown(e, idx)}
                    className="border border-green-300 rounded px-2 py-1 w-20"
                  />
                ) : (
                  item.quantity
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t border-green-200 pt-4 flex justify-between font-semibold">
          <span>Total Items</span>
          <span>{cartItems.length}</span>
        </div>
      </div>
      <button
        className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700 transition mt-6"
        style={{ minWidth: "180px" }}
        type="button"
      >
        Generate Recipe
      </button>
      <AddItemOverlay open={showOverlay} onClose={() => setShowOverlay(false)} />
    </section>
  );
};

export default CartBill;