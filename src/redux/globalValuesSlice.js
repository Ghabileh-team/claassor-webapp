import { createSlice } from "@reduxjs/toolkit";
const Parse = require("parse");
Parse.serverURL = "http://168.119.206.34:1337/parse";
Parse.initialize("APPLICATION_ID");

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    currentWorkspace: Parse.User.current(),
    showPopup: false,
    showPopupArchive: false,
  },
  reducers: {
    updateCurrentWorkspace: (state, action) => {
      state.currentWorkspace = action.payload;
    },
    updateShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    updateShowPopupArchive: (state, action) => {
      state.showPopupArchive = action.payload;
    },
  },
});

export const {
  updateCurrentWorkspace,
  updateShowPopup,
  updateShowPopupArchive,
} = globalSlice.actions;

export const selectCurrentWorkspace = (state) => state.global.currentWorkspace;
export const selectShowPopup = (state) => state.global.showPopup;
export const selectShowPopupArchive = (state) => state.global.showPopupArchive;

export default globalSlice.reducer;
