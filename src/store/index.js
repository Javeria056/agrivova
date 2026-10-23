import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice.js';

const dummyReducer = (state = { items: [] }) => state;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crops: dummyReducer,
    weather: dummyReducer,
    orders: dummyReducer,
    buyers: dummyReducer,
    tasks: dummyReducer,
    expenses: dummyReducer,
    inventory: dummyReducer,
    activity: dummyReducer,
    ui: dummyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});