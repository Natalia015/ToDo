import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TasksState {
  taskItems: {text: string; isChecked: boolean}[];
}

const initialState: TasksState = {
  taskItems: [],
};

// Create a slice of the Redux state using createSlice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  // Specify the reducers (actions) that can update this slice of state
  reducers: {
    // Reducer to add a new task to the taskItems array
    addTask: (state, action: PayloadAction<string>) => {
      state.taskItems.push({text: action.payload, isChecked: false});
    },
    // Reducer to delete a task from the taskItems array by index
    deleteTask: (state, action: PayloadAction<number>) => {
      state.taskItems.splice(action.payload, 1);
    },
    // Reducer to edit the text of a task in the taskItems array by index
    editTask: (
      state,
      action: PayloadAction<{index: number; newText: string}>,
    ) => {
      const {index, newText} = action.payload;
      state.taskItems[index].text = newText;
    },
    // Reducer to toggle the isChecked property of a task in the taskItems array by index
    toggleCheckboxTask: (state, action: PayloadAction<{index: number}>) => {
      const {index} = action.payload;

      if (index >= 0 && index < state.taskItems.length) {
        // Map over taskItems and toggle the isChecked property of the specified task
        const updatedTaskItems = state.taskItems.map((task, i) => {
          if (i === index) {
            return {...task, isChecked: !task.isChecked};
          } else {
            return task;
          }
        });
        // Update the taskItems array with the modified tasks
        state.taskItems = updatedTaskItems;
      } else {
        //log an error
        console.error(`Invalid index: ${index}`);
      }
    },
  },
});

export const {addTask, deleteTask, editTask, toggleCheckboxTask} =
  tasksSlice.actions;
export default tasksSlice.reducer;
