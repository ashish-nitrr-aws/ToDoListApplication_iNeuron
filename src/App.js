import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        label: newTask,
        completed: false,
        addedAt: new Date().toLocaleString(),
        completedAt: null,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].label = updatedTask;
    setTasks(updatedTasks);
  };

  const toggleTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks[index];
    task.completed = !task.completed;
    if (task.completed) {
      task.completedAt = new Date().toLocaleString();
    } else {
      task.completedAt = null;
    }
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <TaskForm
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <TaskList
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
