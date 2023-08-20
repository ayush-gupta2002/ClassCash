import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.teacher = action.payload.teacher;
      state.student = action.payload.student;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSucces,
  logoutStart,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
