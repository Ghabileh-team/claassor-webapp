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
    editItem: "",
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
    updateEditItem: (state, action) => {
      state.editItem = action.payload;
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
  updateEditItem,
} = archiveSlice.actions;

export const selectWorkspace = (state: any) => state.archive.workspace;
export const selectArchiveLabel = (state: any) => state.archive.archiveLabel;
export const selectArchiveUnit = (state: any) => state.archive.archiveUnit;
export const selectArchiveSession = (state: any) =>
  state.archive.archiveSession;
export const selectIsAdmin = (state: any) => state.archive.isAdmin;
export const selectIsCreator = (state: any) => state.archive.isCreator;
export const selectEditItem = (state: any) => state.archive.editItem;

export default archiveSlice.reducer;
