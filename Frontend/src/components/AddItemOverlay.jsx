import React from "react";

const AddItemOverlay = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4 text-green-700">Add Item</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-green-900" htmlFor="itemName">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              required
              className="w-full border border-green-300 rounded px-3 py-2"
              placeholder="e.g., Olive Oil"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-green-900" htmlFor="itemQty">
              Quantity <span className="text-gray-400">(optional)</span>
            </label>
            <input
              id="itemQty"
              type="text"
              className="w-full border border-green-300 rounded px-3 py-2"
              placeholder="e.g., 1 bottle"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemOverlay;