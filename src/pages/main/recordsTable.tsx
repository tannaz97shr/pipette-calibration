import { Table } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ColumnsType } from "antd/es/table/interface";

import { RECORD_LOOP_STEP } from "../../constances";
import { RootState } from "../../store";
import Styles from "./styled";

const DataTable = () => {
  const { TableContainer } = Styles;
  const cols = [...new Array(RECORD_LOOP_STEP)].map((_, index) => ({
    title: `Dispense-${index + 1}`,
    dataIndex: `record${index + 1}`,
  }));
  cols.unshift({ title: "Test Volume", dataIndex: "volume" });
  const { records } = useSelector((state: RootState) => state.weights);
  const theObject = records.reduce((acc, current, index) => {
    acc[`record${index + 1}`] = current;
    return acc;
  }, {} as any);
  theObject["volume"] = "100%";
  console.log(theObject, cols, "the resutl");

  return (
    <TableContainer>
      <Table dataSource={[theObject]} columns={cols} pagination={false} />
    </TableContainer>
  );
};

export default DataTable;
