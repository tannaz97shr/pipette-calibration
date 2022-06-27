import Flow from "./flow";
import DataTable from "./recordsTable";

import Styles from "./styled";

const MainPage = () => {
  const { PageContainer } = Styles;
  return (
    <PageContainer>
      <Flow />
      <DataTable />
    </PageContainer>
  );
};

export default MainPage;
