import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type recordsType = string | null;

export interface WeightsState {
    records: recordsType[];
}

const initialState: WeightsState = {
    records: new Array(5)
}

export const weightsSlice = createSlice({
    name: "weights",
    initialState,
    reducers: {
    }
})