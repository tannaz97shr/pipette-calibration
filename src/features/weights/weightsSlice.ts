import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nextRound, resetRound } from "../steps/stepsSlice";

import { dataCalculator } from "../../utils/calculators";

export type recordsType = string | null;

export interface IActionType {
  index: number;
  record: string;
  round: number;
}

export interface DataType {
  key: string;
  testVolume: string;
  mean: number;
  stdDeciation: number;
  accuracy: number;
  precision: number;
  round: number;
}

export interface WeightsState {
  records: recordsType[][];
  calculatedData: DataType[];
}

const initialState: WeightsState = {
  records: [[]],
  calculatedData: [],
};

export const weightsSlice = createSlice({
  name: "weights",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<IActionType>) => {
      state.records[action.payload.round - 1].push(action.payload.record);
    },
    removeRoundRecords: (state, action: PayloadAction<{ round: number }>) => {
      state.records[action.payload.round - 1] = [];
    },
    calculateData: (state, action: PayloadAction<{ round: number }>) => {
      const data = dataCalculator(
        state.records[action.payload.round - 1],
        action.payload.round
      );
      state.calculatedData.push(data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextRound, (state) => {
      state.records.push([]);
    });
  },
});

export const { addRecord, removeRoundRecords, calculateData } =
  weightsSlice.actions;

export default weightsSlice.reducer;
