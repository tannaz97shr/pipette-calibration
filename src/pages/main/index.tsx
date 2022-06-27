import Flow from "./flow";
import DataTable from "./recordsTable";
import Styles from "./styled";
import CalculateTable from "./calculateTable";

const MainPage = () => {
  const { PageContainer } = Styles;
  return (
    <PageContainer>
      <Flow />
      <DataTable />
      <CalculateTable />
    </PageContainer>
  );
};

export default MainPage;
