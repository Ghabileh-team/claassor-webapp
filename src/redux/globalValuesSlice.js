import { createSlice } from "@reduxjs/toolkit";
const Parse = require("parse");
Parse.serverURL = "http://168.119.206.34:1337/parse";
Parse.initialize("APPLICATION_ID");

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    currentWorkspace: Parse.User.current(),
  },
  reducers: {
    updateCurrentWorkspace: (state, action) => {
      state.currentWorkspace = action.payload;
    },
  },
});

export const { updateCurrentWorkspace } = globalSlice.actions;

export const selectCurrentWorkspace = (state) => state.global.currentWorkspace;

export default globalSlice.reducer;
