import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './commentSlice'

export default configureStore({
  reducer: {
    comments: commentsReducer
  }
})