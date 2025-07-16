import { createSlice } from '@reduxjs/toolkit';

const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    currentCar: null,
  },
  reducers: {
    setCurrentCar: (state, action) => {
      state.currentCar = action.payload;
    }
  }
})

export const { setCurrentCar } = classesSlice.actions;
export default classesSlice.reducer;
