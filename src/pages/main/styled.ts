import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  background-color: #365314;
`;

const FlowchartContainer = styled.div`
  width: 60%;
  height: 40rem;
  border: 1px solid #d1d1d1;
  background-color: #fde68a;
`;

const NextStepButtonStyled = styled.button`
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #92400e;
  color: #92400e;
  cursor: pointer;
  margin-bottom: 4px;
  z-index: 1000;
`;

const ControllerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 8px;
  margin-left: 8px;
`;

const TableContainer = styled.div`
  margin-top: 2rem;
`;

const Styles = {
  PageContainer,
  FlowchartContainer,
  NextStepButtonStyled,
  TableContainer,
  ControllerStyled
};

export default Styles;
