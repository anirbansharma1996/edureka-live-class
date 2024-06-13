import React, { useReducer } from "react";

const initialState = {
  todos: [],
  newTodo: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.index),
      };
    case "UPDATE_NEW_TODO":
      return { ...state, newTodo: action.text };
    default:
      return state;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", text: state.newTodo });
    dispatch({ type: "UPDATE_NEW_TODO", text: "" });
  };

  const handleToggle = (index) => {
    dispatch({ type: "TOGGLE_TODO", index });
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_TODO", index });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.newTodo}
          onChange={(event) =>
            dispatch({ type: "UPDATE_NEW_TODO", text: event.target.value })
          }
          placeholder="New Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reducer;
