export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
          isEditing: false,
          editValue: action.payload,
        },
        ...state,
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    case "START_EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: true } : todo,
      );

    case "CHANGE_EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, editValue: action.value } : todo,
      );

    case "SAVE_EDIT":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              title: todo.editValue,
              isEditing: false,
            }
          : todo,
      );

    default:
      return state;
  }
}
