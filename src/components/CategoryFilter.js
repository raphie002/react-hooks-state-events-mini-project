// src/components/CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render <button> elements for each category */}
      {categories.map(category => (
        <button
          key={category} // Key prop equal to the category
          onClick={() => onSelectCategory(category)} // Call parent's handler to update selected category
          className={category === selectedCategory ? "selected" : ""} // Add 'selected' class if it's the active category
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
