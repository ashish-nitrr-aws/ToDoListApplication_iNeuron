// TaskForm.js
import React from 'react';

const TaskForm = ({ newTask, handleInputChange, addTask }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
