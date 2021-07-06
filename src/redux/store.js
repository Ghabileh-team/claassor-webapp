import { combineReducers, configureStore } from "@reduxjs/toolkit";
import archiveReducer from "./archiveSlice";
import globalReducer from "./globalValuesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  archive: archiveReducer,
  global: globalReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
});
