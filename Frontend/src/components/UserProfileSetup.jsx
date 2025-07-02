import React, { useState } from "react";

const UserProfileSetup = ({ onComplete, userId, password }) => {
  const [form, setForm] = useState({
    userId,
    password,
    name: "",
    email: "",
    allergies: "",
    cuisinePreferences: "",
    dietaryConcerns: "",
    cookingLevel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save this profile to localStorage or send to backend here
    onComplete(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-700">Complete Your Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies (comma separated)"
          value={form.allergies}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="cuisinePreferences"
          placeholder="Cuisine Preferences (comma separated)"
          value={form.cuisinePreferences}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="dietaryConcerns"
          placeholder="Dietary Concerns (e.g., vegan, gluten-free)"
          value={form.dietaryConcerns}
          onChange={handleChange}
          className="border border-green-300 rounded px-3 py-2"
        />
        <select
          name="cookingLevel"
          value={form.cookingLevel}
          onChange={handleChange}
          required
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
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileSetup;