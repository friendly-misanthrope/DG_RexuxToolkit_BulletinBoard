import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios.get(USERS_URL)
    .then(response => response.data)
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state => state.users)
export default usersSlice.reducer;