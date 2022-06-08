import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { SignIn } from './sign-in';
import userReducer from '../redux/userSlice';
import tasksReducer from '../redux/tasksSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer
    },
});


describe('Testing Sign In Page', () => {
  test('it should be rendered', async () => {
    const component = (
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const {getByPlaceholderText, toJSON} = render(component);

    const element = getByPlaceholderText('Username');
    expect(element.children.length).toEqual(1);

    expect(toJSON()).toMatchSnapshot();
  });

});