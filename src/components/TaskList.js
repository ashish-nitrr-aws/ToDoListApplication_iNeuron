// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({
  tasks,
  toggleTaskCompleted,
  editTask,
  deleteTask,
}) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          toggleTaskCompleted={toggleTaskCompleted}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
