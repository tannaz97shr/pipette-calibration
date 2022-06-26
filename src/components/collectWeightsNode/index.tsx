/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { SubmitHandler, useForm } from "react-hook-form";

import Styles from "../../assets/styles/NodeStyles";
import FormStyles from "./styled";

interface CollectWeightNodeComponentProps {
  data: any;
}

interface IFormInputs {
  weight: string;
}

const CollectWeightsComponent = (props: CollectWeightNodeComponentProps) => {
  const { NodeContainerStyled } = Styles;
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  const { WeightCollectorFormStyled, ErrorStyled, LabelStyled } = FormStyles;
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <NodeContainerStyled>
      <Handle type="target" position={Position.Top} />
      <WeightCollectorFormStyled onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled>Weight:</LabelStyled>
        <input
          {...register("weight", { required: true, pattern:/^(0|[1-9]\d*)(\.\d+)?$/ })}
        />
        {errors.weight && <ErrorStyled>Please insert a valid number!</ErrorStyled>}
        <input type="submit" />
      </WeightCollectorFormStyled>
      <Handle type="source" position={Position.Right} style={{ top: 0 }} />
    </NodeContainerStyled>
  );
};

export default CollectWeightsComponent;
