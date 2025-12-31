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
    }
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
