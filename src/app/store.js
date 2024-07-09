import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import { logger } from 'redux-logger';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: ((getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  })
});