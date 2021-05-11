import { configureStore } from "@reduxjs/toolkit";
import archiveReducer from "./archiveSlice";
import globalReducer from "./globalValuesSlice";

export const store = configureStore({
  reducer: { archive: archiveReducer, global: globalReducer },
});
