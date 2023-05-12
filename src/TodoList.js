import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id, editedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const complete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  console.log(todos);

  let task = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      completed={todo.completed}
      removeTodo={remove}
      editTodo={edit}
      completeTodo={complete}
    />
  ));

  return (
    <div>
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App</span>{' '}
        </h1>
        <ul>{task}</ul>
        <NewTodoForm createTodo={create} />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default TodoList;
