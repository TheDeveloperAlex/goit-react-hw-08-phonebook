import authOperation from "./contacts-operation";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.refreshCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperation.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      if (state.token) {
        state.isLoggedIn = true;
      }

      state.isFetchingCurrentUser = false;
    },
    [authOperation.refreshCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
