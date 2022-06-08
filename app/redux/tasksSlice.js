import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
      value: []
    },
    reducers: {
      add_task: (state, action) => {
        state.value = [...state.value, action.payload];
      },
      remove_task: (state, action) => {
        state.value = state.value.filter(d => d.localeCompare(action.payload) !== 0)
      },
      edit_task: (state, action) => {
        const index = state.value.findIndex(d => d.localeCompare(action.payload.task) === 0);
        state.value[index] = action.payload.edited
      }
    },
});  

// Action creators are generated for each case reducer function
export const { add_task, remove_task, edit_task } = tasksSlice.actions;
  
export default tasksSlice.reducer;