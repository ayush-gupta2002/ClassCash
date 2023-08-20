import { createSlice } from "@reduxjs/toolkit";

const outletSlice = createSlice({
  name: "outlet",
  initialState: {
    currentOutlet: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    OutletLoginStart: (state) => {
      state.isFetching = true;
    },
    OutletLoginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentOutlet = action.payload.outlet;
      state.error = false;
    },
    OutletLoginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    OutletLogoutStart: (state) => {
      state.isFetching = true;
    },
    OutletLogoutFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    OutletLogoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentOutlet = null;
      state.error = false;
    },
  },
});

export const {
  OutletLoginStart,
  OutletLoginSuccess,
  OutletLoginFailure,
  OutletLogoutStart,
  OutletLogoutSuccess,
  OutletLogoutFailure,
} = outletSlice.actions;
export default outletSlice.reducer;
