import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import demoGlobalStateReducer from '@/redux/init/demo'

export const store = configureStore({
  reducer: demoGlobalStateReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
