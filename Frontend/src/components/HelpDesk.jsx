import React from "react";

const HelpDesk = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Help Desk</h2>
      <ul className="list-disc pl-5 space-y-2 text-green-900">
        <li>To generate a recipe, fill in your preferences and click "Generate Recipe".</li>
        <li>Edit your pantry items by clicking on their name or quantity.</li>
        <li>Use the profile menu to access settings, preferences, and feedback.</li>
        <li>For more help, contact support@example.com.</li>
      </ul>
    </div>
  </div>
);

export default HelpDesk;