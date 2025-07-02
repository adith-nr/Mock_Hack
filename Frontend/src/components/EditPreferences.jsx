import React, { useState } from "react";

const EditPreferences = ({ user, onSave, onClose }) => {
  const [form, setForm] = useState({
    allergies: user?.allergies || "",
    cuisinePreferences: user?.cuisinePreferences || "",
    dietaryConcerns: user?.dietaryConcerns || "",
    cookingLevel: user?.cookingLevel || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative flex flex-col gap-4"
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
          type="button"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green-700">Edit Preferences</h2>
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={form.allergies}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="cuisinePreferences"
          placeholder="Cuisine Preferences"
          value={form.cuisinePreferences}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="dietaryConcerns"
          placeholder="Dietary Concerns"
          value={form.dietaryConcerns}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <select
          name="cookingLevel"
          value={form.cookingLevel}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        >
          <option value="">Select Cooking Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default EditPreferences;