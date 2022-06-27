import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weightsReducer from "./features/weights/weightsSlice";

export const store = configureStore({
  reducer: {
    weights: weightsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
