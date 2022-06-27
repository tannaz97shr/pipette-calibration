import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
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
  position: absolute;
  z-index: 1000;
  margin: 1rem;
`;

const Styles = { PageContainer, FlowchartContainer, NextStepButtonStyled };

export default Styles;
