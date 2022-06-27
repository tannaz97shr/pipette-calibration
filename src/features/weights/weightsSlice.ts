import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nextRound, resetRound } from "../steps/stepsSlice";
type recordsType = string | null;

export interface IActionType {
  index: number;
  record: string;
  round: number;
}

export interface WeightsState {
  records: recordsType[][];
}

const initialState: WeightsState = {
  records: [[]],
};

export const weightsSlice = createSlice({
  name: "weights",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<IActionType>) => {
      state.records[action.payload.round - 1].push(action.payload.record);
    },
    removeRoundRecords: (state, action: PayloadAction<{round:number}>) => {
      state.records[action.payload.round - 1] = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(nextRound, (state) => {
      state.records.push([]);
    });
  },
});

export const { addRecord, removeRoundRecords } = weightsSlice.actions;

export default weightsSlice.reducer;
