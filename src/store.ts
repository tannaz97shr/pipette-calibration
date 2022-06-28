import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weightsReducer from "./features/weights/weightsSlice";
import stepsReducer from "./features/steps/stepsSlice";

export const store = configureStore({
  reducer: {
    weights: weightsReducer,
    steps: stepsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
