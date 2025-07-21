// src/components/Task.js
import React from "react";

function Task({ text, category, id, onDeleteTask }) { // Destructure props including id and onDeleteTask
  const handleDeleteClick = () => {
    onDeleteTask(id); // Call the parent's delete function with this task's ID
  };

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Display category */}
      <div className="text">{text}</div>       {/* Display text */}
      <button className="delete" onClick={handleDeleteClick}>X</button> {/* Delete button with handler */}
    </div>
  );
}

export default Task;
