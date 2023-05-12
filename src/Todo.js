import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ task, id, completed, removeTodo, editTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState('');
  const [error, setError] = useState(false);

  console.log('before', task, completed);

  const handleDelete = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditedTask(e.target.value);
  };

  const handleCompletion = () => {
    // let a = !isCompleted;
    console.log('after', task, completed);

    completeTodo(id);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editedTask.trim().length === 0) {
      setError(true);
      console.log('if error');
    } else {
      console.log('else no error');

      editTodo(id, editedTask);
      setIsEditing(false);
      setError(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={handleSave}>
            <input
              type="text"
              placeholder={task}
              id="editedTask"
              name="editedTask"
              value={editedTask}
              onChange={handleChange}
            />
            <button id="save-button">Save</button>
            {error && <span>Input required</span>}
          </form>
        </div>
      ) : (
        <div className="Todo">
          <li
            className={completed ? 'Todo-task completed' : 'Todo-task'}
            onClick={handleCompletion}
          >
            {task}
          </li>
          <div className="Todo-buttons">
            <button onClick={handleEdit}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={handleDelete}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
