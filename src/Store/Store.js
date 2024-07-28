import { configureStore } from '@reduxjs/toolkit'
import MainCatogerySlice from './MainCatogerySlice'
import SubCatogerySlice from './SubCatogerySlice'

export const store = configureStore({
  reducer: {
    mainCatogeries:MainCatogerySlice,
    subCatogeries:SubCatogerySlice
  },
})