import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch