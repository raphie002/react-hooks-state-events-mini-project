// src/components/TaskList.js
import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks, onDeleteTask }) { // Destructure props
  return (
    <div className="tasks">
      {/* Display a list of tasks using Task component */}
      {tasks.map(task => (
        <Task
          key={task.id} // Important for lists: use a unique key for each item
          id={task.id} // Pass the task's ID for deletion
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask} // Pass the delete callback down to each Task
        />
      ))}
    </div>
  );
}

export default TaskList;
