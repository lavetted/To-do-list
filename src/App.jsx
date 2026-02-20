import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "./reducer.jsx";
import TodoItem from "./todoItem.jsx";
import "./App.css";

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTodo.trim()) return;

    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  }

  return (
    <div className="app">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}
