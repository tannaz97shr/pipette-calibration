import { mean, std } from "mathjs";

import type { recordsType } from "../features/weights/weightsSlice";

export const meanCalculator = (records: recordsType[]): number => {
  const tempArray: number[] = [];
  records.forEach((record) => {
    if (record) tempArray.push(parseFloat(record) * 100);
  });
  return mean(tempArray) / 100;
};
export const stdDeviationCalculator = (records: recordsType[]): number => {
  const tempArray: number[] = [];
  records.forEach((record) => {
    if (record) tempArray.push(parseFloat(record) * 100);
  });
  return std(tempArray, "unbiased") / 100;
};
