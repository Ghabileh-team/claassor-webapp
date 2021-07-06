import { createSlice } from "@reduxjs/toolkit";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const archiveSlice = createSlice({
  name: "archive",
  initialState: {
    workspace: "",
    archiveLabel: {},
    archiveUnit: {},
    archiveSession: {},
    isCreator: false,
    isAdmin: false,
  },
  reducers: {
    updateWorkspace: (state, action) => {
      state.workspace = action.payload;
    },
    updateArchiveLabel: (state, action) => {
      state.archiveLabel = action.payload;
    },
    updateArchiveUnit: (state, action) => {
      state.archiveUnit = action.payload;
    },
    updateArchiveSession: (state, action) => {
      state.archiveSession = action.payload;
    },
    updateIsCreator: (state, action) => {
      state.isCreator = action.payload;
    },
    updateIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const {
  updateWorkspace,
  updateArchiveLabel,
  updateArchiveUnit,
  updateArchiveSession,
  updateIsAdmin,
  updateIsCreator,
} = archiveSlice.actions;

export const selectWorkspace = (state) => state.archive.workspace;
export const selectArchiveLabel = (state) => state.archive.archiveLabel;
export const selectArchiveUnit = (state) => state.archive.archiveUnit;
export const selectArchiveSession = (state) => state.archive.archiveSession;
export const selectIsAdmin = (state) => state.archive.isAdmin;
export const selectIsCreator = (state) => state.archive.isCreator;

export default archiveSlice.reducer;
