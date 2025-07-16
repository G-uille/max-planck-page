import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import classesReducer from '../slices/classes'

const store = configureStore({
  reducer: {
    auth: authReducer,
    classes: classesReducer
  }
})

export default store;
