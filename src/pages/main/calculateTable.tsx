import { Table } from "antd";
import { useSelector } from "react-redux";

import { RECORD_LOOP_STEP } from "../../constances";
import { RootState } from "../../store";
import type { ColumnsType } from "antd/lib/table";

import Styles from "./styled";

interface DataType {
  key: string;
  testVolume: string;
  mean: number;
  stdDeciation: number;
  accuracy: number;
  precision: number;
}

const CalculateTable = () => {
  const { TableContainer } = Styles;
  const { records } = useSelector((state: RootState) => state.weights);
  const { round } = useSelector((state: RootState) => state.steps);

  type recordsType = string | null;
  const meanCalculator = (records: recordsType[]): number => {
    let sum = 0;
    records.forEach((record) => {
      if (record) sum = sum + parseFloat(record);
    });
    return sum / records.length;
  };

  const cols: ColumnsType<DataType> = [
    {
      title: "Test Volume",
      dataIndex: "testVolume",
      key: "testVolume",
    },
    {
      title: "Mean(µl)",
      dataIndex: "mean",
      key: "mean",
    },
    {
      title: "Std. Deviation (µl)",
      dataIndex: "stdDeciation",
      key: "stdDeciation",
    },
    {
      title: "Accuracy (%)",
      dataIndex: "accuracy",
      key: "accuracy",
    },
    {
      title: "Precision (%)",
      dataIndex: "precision",
      key: "precision",
    },
  ];

  // if (records[round - 1].length === RECORD_LOOP_STEP) {
  const dataSource: DataType[] = records.map((item) => {
    // if (records[round - 1].length === RECORD_LOOP_STEP) {
    return {
      key: "",
      testVolume: "100%",
      mean: 12,
      stdDeciation: 12,
      accuracy: 12,
      precision: 12,
    };
    // } else return;
  });
  // }
  console.log("calculateTable", dataSource);

  return (
    <TableContainer>
      <Table dataSource={dataSource} columns={cols} pagination={false} />
    </TableContainer>
  );
};

export default CalculateTable;
