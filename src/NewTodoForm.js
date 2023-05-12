import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      setError(true);
    } else {
      createTodo({ id: uuidv4(), task, completed: false });
      setTask('');
      setError(false);
    }
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button id="add-button">Add Todo</button>
      {error && <span>Input required</span>}
    </form>
  );
};

export default NewTodoForm;
