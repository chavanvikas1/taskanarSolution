import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';

const store = configureStore({
  reducer: {
    allTask: taskSlice,
  },
});

export default store;
