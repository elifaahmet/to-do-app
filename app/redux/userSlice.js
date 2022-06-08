import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: {
        username: '',
        firstName: '',
        lastName: '',
      }
    },
    reducers: {
      sign_in: (state, action) => {
        state.value = action.payload
      },
      sign_out: (state) => {
        state.value =  {
            username: '',
            firstName: '',
            lastName: '',
          }
      }
    },
});  
// Action creators are generated for each case reducer function
export const { sign_in, sign_out } = userSlice.actions;
  
export default userSlice.reducer;