import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle', /* idle/pending/fulfilled/rejected */
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
  return axios.get(POSTS_URL)
    .then((response) => response.data);
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            createdAt: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.reactions[reaction]++;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, state => {
        state.status = 'pending';
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.posts = action.payload;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.posts = [];
        state.error = action.error.message;
      });
    }
  }
});

export const selectAllPosts = (state) => state.posts.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;