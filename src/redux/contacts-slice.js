const { createSlice } = require("@reduxjs/toolkit");
import authOperation from "./contacts-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
