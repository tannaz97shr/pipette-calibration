import { Table } from "antd";
import { useSelector } from "react-redux";

import { RECORD_LOOP_STEP } from "../../constances";
import { RootState } from "../../store";

import Styles from "./styled";

const CalculateTable = () => {
  const { TableContainer } = Styles;
  const { records } = useSelector((state: RootState) => state.weights);

  const cols = [
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

  const dataSource = records.map(item => item);

  return (
    <TableContainer>
      <Table dataSource={[]} columns={cols} pagination={false} />
    </TableContainer>
  );
};

export default CalculateTable;
