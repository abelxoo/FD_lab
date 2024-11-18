import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), name: task }]);
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className="mt-4">Lista</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;