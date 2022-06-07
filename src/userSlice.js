import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    email: null,
    user: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
