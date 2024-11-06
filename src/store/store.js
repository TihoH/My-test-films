import { configureStore } from '@reduxjs/toolkit'
import getDataSlice from './Slices/getDataSlice'

export default configureStore({
  reducer: {
    getDataSlice: getDataSlice
  }
})