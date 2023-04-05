import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchUserTask = createAsyncThunk(
  'task',
  async (arg, { rejectWithValue }) => {
    try {
      // let response;
      console.log(arg);
     if(arg?.id==undefined || arg?.id==""){
      console.log("under if");
    let  response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
     
      return response.data;
     }else{
      // console.log(arg);
      // console.log("nder eslw");
      // let response = await axios.put(
      //   'https://jsonplaceholder.typicode.com/todos/'+arg?.id,{completed:arg?.completed});
      // console.log(response);
      // return response.data;
     }
    } catch (error) {
      console.log(error);
      rejectWithValue(error.response);
    }
  }
);

const task = createSlice({
  name: 'task',
  data: [],
  initialState:{},
  isLoading: false,
  isSuccess: false,
  message: '',
  reducers: {},
  extraReducers: {
    [fetchUserTask.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchUserTask.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [fetchUserTask.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

export default task.reducer;

