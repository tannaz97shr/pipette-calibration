import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nextRound, resetRound } from "../steps/stepsSlice";

type recordsType = string | null;

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
}

export interface WeightsState {
  records: recordsType[][];
  calculatedData: DataType[];
}

const initialState: WeightsState = {
  records: [[]],
  calculatedData: [],
};

// To Move To Utils :
const meanCalculator = (records: recordsType[]): number => {
  let sum = 0;
  records.forEach((record) => {
    if (record) sum = sum + parseFloat(record);
  });
  return (sum * 100) / (records.length * 100);
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
      const data = {
        key: `${action.payload.round}`,
        testVolume: "100%",
        mean: meanCalculator(state.records[action.payload.round - 1]),
        stdDeciation: 0,
        accuracy: 0,
        precision: 0,
      };
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
