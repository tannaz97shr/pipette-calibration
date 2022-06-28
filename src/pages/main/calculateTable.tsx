import { Table } from "antd";
import { useSelector } from "react-redux";
import type { ColumnsType } from "antd/lib/table";

import { RootState } from "../../store";
import { DataType } from "../../features/weights/weightsSlice";
import Styles from "./styled";

const CalculateTable = () => {
  const { TableContainer } = Styles;
  const { calculatedData } = useSelector((state: RootState) => state.weights);

  const cols: ColumnsType<DataType> = [
    {
      title: "Round",
      dataIndex: "round",
      key: "round",
    },
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

  return (
    <TableContainer>
      <Table dataSource={calculatedData} columns={cols} pagination={false} />
    </TableContainer>
  );
};

export default CalculateTable;
