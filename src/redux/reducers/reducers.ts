import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../taskReducers/taskReducers';

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
