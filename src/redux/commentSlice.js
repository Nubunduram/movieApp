import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.list.push(action.payload)
    },
    deleteComment: (state, action) => {
      state.list = state.list.filter(comment => comment.id !== action.payload)
    }
  }
})

export const { addComment, deleteComment } = commentSlice.actions
export default commentSlice.reducer