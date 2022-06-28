import { mean, std } from "mathjs";

import type { recordsType, DataType } from "../features/weights/weightsSlice";
import { TOTAL_VOLUME_MICRO_LITER } from "../constances";

export const dataCalculator = (
  records: recordsType[],
  round: number
): DataType => {
  const tempArray: number[] = [];
  records.forEach((record) => {
    if (record) tempArray.push(parseFloat(record) * 100);
  });
  const resultMean = mean(tempArray) / 100;
  const resultStdDevision = std(tempArray, "unbiased") / 100;
  const resultAccuracy = (resultMean / TOTAL_VOLUME_MICRO_LITER) * 100;
  return {
    key: `${round}`,
    testVolume: "100%",
    mean: resultMean,
    stdDeciation: resultStdDevision,
    accuracy: resultAccuracy,
    precision: 0,
  };
};
