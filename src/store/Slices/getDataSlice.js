import { createSlice } from '@reduxjs/toolkit'

export const getData = createSlice({
  name: 'getData',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state , actions) => {
      state.value += 1
    },

  }
})

// Action creators are generated for each case reducer function
export const { increment } = getData.actions

export default getData.reducer