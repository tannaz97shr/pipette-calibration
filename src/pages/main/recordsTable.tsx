import { Table } from "antd";
import { useSelector } from "react-redux";

import { RECORD_LOOP_STEP } from "../../constances";
import { RootState } from "../../store";

import Styles from "./styled";

const DataTable = () => {
  const { TableContainer } = Styles;
  const cols = [...new Array(RECORD_LOOP_STEP)].map((_, index) => ({
    title: `Dispense-${index + 1}`,
    dataIndex: `record${index + 1}`,
    key: `record${index + 1}`,
  }));
  cols.unshift({ title: "Test Volume", dataIndex: "volume", key: "volume" });
  const { records } = useSelector((state: RootState) => state.weights);
  const dataSourceObject = records.map((record) => {
    const row = record.reduce((acc, current, index) => {
      acc["key"] = index;
      acc[`record${index + 1}`] = current;
      return acc;
    }, {} as any);
    row["volume"] = "100%";
    return row;
  });

  return (
    <TableContainer>
      <Table dataSource={dataSourceObject} columns={cols} pagination={false} />
    </TableContainer>
  );
};

export default DataTable;
