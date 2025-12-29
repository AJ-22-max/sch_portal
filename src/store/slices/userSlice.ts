import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: {}, token: null, student: null },
  reducers: {
    setUser(state: any, action) {
      const payload = action.payload;
      state.user = payload?.user;
      state.token = payload?.token;
      state.student = payload?.student;
    },
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state: any) {
      state.user = null;
      state.token = null;
      state.student = null;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
