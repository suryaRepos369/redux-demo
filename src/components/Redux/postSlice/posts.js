//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

export const fetchPosts = createAsyncThunk("post/fetchPosts", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data.map((data) => data.title));
});
const initialState = {
  loading: false,
  postsArr: [],
  // name: "asdfasdfas",
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.postsArr = [];
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.postsArr = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.postsArr = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
