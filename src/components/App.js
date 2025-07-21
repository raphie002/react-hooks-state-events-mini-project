// src/components/App.js
import React, { useState } from "react"; // Import useState
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"; // Import the data

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS }); // You can remove or comment this out after verification

function App() {
  const [tasks, setTasks] = useState(TASKS); // State for the list of tasks
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for the currently selected filter category

  // Handler for deleting a task
  const handleDeleteTask = (taskIdToDelete) => {
    // Filter out the task with the matching ID
    setTasks(tasks.filter(task => task.id !== taskIdToDelete));
  };

  // Handler for adding a new task
  const handleAddTask = (newTaskData) => {
    // Generate a simple unique ID (for a real app, use a more robust method)
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    setTasks([...tasks, { ...newTaskData, id: newId }]);
  };

  // Filter tasks based on the selectedCategory
  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true; // Show all tasks if "All" is selected
    }
    return task.category === selectedCategory; // Show tasks matching the selected category
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} // Pass all categories
        selectedCategory={selectedCategory} // Pass the currently selected category
        onSelectCategory={setSelectedCategory} // Pass the setter function to update selected category
      />
      <NewTaskForm
        categories={CATEGORIES} // Pass categories for the dropdown
        onTaskFormSubmit={handleAddTask} // Pass the callback for form submission
      />
      <TaskList
        tasks={tasksToDisplay} // Pass the filtered tasks to display
        onDeleteTask={handleDeleteTask} // Pass the delete callback down to TaskList
      />
    </div>
  );
}

export default App;
