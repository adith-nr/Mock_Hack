import React from "react";
import data from "../data.json";

const inputs = data.controlPanelInputs;

const ControlPanel = () => (
  <section className="w-[25%] flex-none border-r border-green-200 p-6 flex flex-col gap-4 overflow-y-auto">
    <h2 className="text-2xl font-semibold text-green-700 mb-2">Recipe Controls</h2>

    {/* Dish Type */}
    <div className="flex flex-col">
      <label htmlFor="dishType" className="text-sm text-green-900 mb-1">Dish Type</label>
      <input
        id="dishType"
        value={inputs.dishType}
        readOnly
        className="border border-green-300 rounded px-3 py-2 bg-gray-100"
      />
    </div>

    {/* Cuisine */}
    <div className="flex flex-col">
      <label htmlFor="cuisine" className="text-sm text-green-900 mb-1">Cuisine</label>
      <input
        id="cuisine"
        value={inputs.cuisine}
        readOnly
        className="border border-green-300 rounded px-3 py-2 bg-gray-100"
      />
    </div>

    {/* Meal Time */}
    <div className="flex flex-col">
      <label htmlFor="mealTime" className="text-sm text-green-900 mb-1">Meal Time</label>
      <input
        id="mealTime"
        value={inputs.mealTime}
        readOnly
        className="border border-green-300 rounded px-3 py-2 bg-gray-100"
      />
    </div>

    {/* Max Cooking Time */}
    <div className="flex flex-col">
      <label htmlFor="maxCookingTime" className="text-sm text-green-900 mb-1">Max Cooking Time (minutes)</label>
      <input
        id="maxCookingTime"
        value={inputs.maxCookingTime}
        readOnly
        className="border border-green-300 rounded px-3 py-2 bg-gray-100"
      />
    </div>

    {/* Servings */}
    <div className="flex flex-col">
      <label htmlFor="servings" className="text-sm text-green-900 mb-1">Servings</label>
      <input
        id="servings"
        value={inputs.servings}
        readOnly
        className="border border-green-300 rounded px-3 py-2 bg-gray-100"
      />
    </div>

    {/* Additional Instructions */}
    <div className="flex flex-col">
      <label htmlFor="prompt" className="text-sm text-green-900 mb-1">Additional Instructions</label>
      <textarea
        id="prompt"
        value={inputs.additionalInstructions}
        readOnly
        className="border border-green-300 rounded px-3 py-2 min-h-[80px] resize-y bg-gray-100"
      />
    </div>
  </section>
);

export default ControlPanel;