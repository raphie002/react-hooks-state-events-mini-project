// src/components/NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // State for the task text input
  // Initialize category state with the first non-"All" category from your data
  const [category, setCategory] = useState(categories.filter(cat => cat !== "All")[0] || "");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    onTaskFormSubmit({ text, category }); // Call the parent's callback with new task data
    setText(""); // Clear the text input after submission
    // Optionally reset category or keep it as is
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text} // Controlled component: input value from state
          onChange={(e) => setText(e.target.value)} // Update state on change
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} // Controlled component: select value from state
          onChange={(e) => setCategory(e.target.value)} // Update state on change
        >
          {/* Render <option> elements for each category except "All" */}
          {categories
            .filter(cat => cat !== "All") // Filter out "All"
            .map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
