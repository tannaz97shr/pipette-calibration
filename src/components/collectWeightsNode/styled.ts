import styled from "styled-components";

 const WeightCollectorFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    margin-bottom: 5px;
    border: 1px solid #a0a0a0;
    border-radius: 8px;
    padding: 4px;
  &[type="submit"] {
    width: 6rem;
    cursor: pointer;
    background-color: #93c5fd;
    align-self: center;
    font-size: 10px;
   }
  }
`;

const ErrorStyled = styled.div`
  color: red;
`;

const LabelStyled = styled.div`
margin-bottom: 5px; 
`;

const Styles = {WeightCollectorFormStyled, ErrorStyled, LabelStyled};

export default Styles;