import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RECORD_LOOP_STEP } from "../../constances";

export interface IActionType {
  nextNodeIndex: number;
}

export interface ISteps {
  flowStep: number;
  recordsLoopStep: number;
  round: number;
}

const initialState: ISteps = {
  flowStep: 0,
  recordsLoopStep: RECORD_LOOP_STEP,
  round: 1,
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    goToNextStep: (state, action: PayloadAction<IActionType>) => {
      if (state.flowStep === 3 && state.recordsLoopStep > 0) {
        state.recordsLoopStep--;
      }
      state.flowStep = action.payload.nextNodeIndex;
    },
    resetRound: (state) => {
      state.flowStep = 0;
      state.recordsLoopStep = RECORD_LOOP_STEP;
    },
    nextRound: (state) => {
      state.flowStep = 0;
      state.recordsLoopStep = RECORD_LOOP_STEP;
      state.round++;
    },
  },
});

export const { goToNextStep, resetRound, nextRound } = stepsSlice.actions;

export default stepsSlice.reducer;
