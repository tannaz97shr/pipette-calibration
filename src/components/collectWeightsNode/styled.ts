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
    background-color: #fde68a;
    align-self: center;
    font-size: 10px;
   }

   &[disabled] {
     background-color: #f0f0f0;
     cursor: not-allowed;
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