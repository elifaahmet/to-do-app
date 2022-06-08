import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { RootNavigation } from './navigation';
import userReducer from './redux/userSlice';
import tasksReducer from './redux/tasksSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer
    },
});

export default class ToDoApp extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
        );
    }
}
