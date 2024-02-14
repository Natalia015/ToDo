import { createAction } from '@reduxjs/toolkit';

// Create actions
export const addTask = createAction<string>('tasks/addTask');
export const deleteTask = createAction<number>('tasks/deleteTask');
export const editTask = createAction<{ index: number; newText: string }>('tasks/editTask');
export const toggleCheckbox = createAction<number>('tasks/toggleCheckbox');
