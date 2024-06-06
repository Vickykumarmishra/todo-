import { createSlice } from '@reduxjs/toolkit';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState); // storing the data in local storage
  } catch (err) {
    // handle errors if any
  }
};

// Initial state with tasks loaded from localStorage
const initialState = {
  tasks: loadState(),
};

// Creating a slice for tasks with necessary reducers
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
      saveState(state.tasks); // saving state after adding a task
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveState(state.tasks); // saving state after deleting a task
    },
    editTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
      saveState(state.tasks); // saving state after editing a task
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      saveState(state.tasks); // saving state after toggling a task
    },
  },
});

// Exporting actions and reducer
export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
