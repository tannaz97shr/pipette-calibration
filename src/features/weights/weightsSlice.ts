import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type recordsType = string | null;

export interface IActionType {
  index: number;
  record: string;
}

export interface WeightsState {
  records: recordsType[];
}

const initialState: WeightsState = {
  records: new Array(5),
};

export const weightsSlice = createSlice({
  name: "weights",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<IActionType>) => {
      state.records[action.payload.index] = action.payload.record;
    },
  },
});

export const { addRecord } = weightsSlice.actions;

export default weightsSlice.reducer;
