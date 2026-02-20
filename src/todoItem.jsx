export default function TodoItem({ todo, dispatch }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
      />

      {todo.isEditing ? (
        <>
          <input
            value={todo.editValue}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_EDIT",
                id: todo.id,
                value: e.target.value,
              })
            }
          />
          <button onClick={() => dispatch({ type: "SAVE_EDIT", id: todo.id })}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>

          <button onClick={() => dispatch({ type: "START_EDIT", id: todo.id })}>
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
