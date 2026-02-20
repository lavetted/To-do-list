# React Todo List

A simple, interactive to-do list built with React that demonstrates modern state management, controlled components, and conditional rendering. This project was created to practice structuring a complete React application from functional requirements.

## Application Structure
src/
  App.jsx          → Main application component
  TodoItem.jsx     → Individual todo UI + logic
  reducer.jsx      → State management logic
  App.css          → Application styling

# State Management Approach

## useReducer

- Handles all todo-related state:

- Adding todos

- Toggling completion

- Editing tasks

- Deleting tasks

## Reducer actions:

- ADD_TODO

- TOGGLE_TODO

- DELETE_TODO

- START_EDIT

- CHANGE_EDIT

- SAVE_EDIT

# useState

## Handles simple UI state:

- New todo input field