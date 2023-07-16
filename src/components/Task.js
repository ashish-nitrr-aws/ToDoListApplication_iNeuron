// Task.js
import React from 'react';

const Task = ({ task, index, toggleTaskCompleted, editTask, deleteTask }) => {
  const handleEdit = () => {
    const updatedTask = prompt('Enter updated task', task.label);
    editTask(index, updatedTask);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompleted(index)}
        />
      </div>
      <div className="task-content">
        <span
          className="task-label"
          onClick={() => toggleTaskCompleted(index)}
        >
          {task.label}
        </span>
        <div className="task-datetime">
          <div className="added-datetime">Added: {task.addedAt}</div>
          {task.completed && (
            <div className="completed-datetime">
              Completed: {task.completedAt}
            </div>
          )}
        </div>
      </div>
      <div className="task-buttons">
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
