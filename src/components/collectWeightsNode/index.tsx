/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { SubmitHandler, useForm } from "react-hook-form";

import Styles from "../../assets/styles/NodeStyles";
import FormStyles from "./styled";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { addRecord } from "../../features/weights/weightsSlice";
import { goToNextStep } from "../../features/steps/stepsSlice";

interface IFormInputs {
  weight: string;
}

const CollectWeightsComponent = () => {
  const { NodeContainerStyled } = Styles;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();
  const dispatch = useDispatch();
  const { flowStep, round } = useSelector((state: RootState) => state.steps);
  const { WeightCollectorFormStyled, ErrorStyled, LabelStyled } = FormStyles;
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(addRecord({ index: 1, record: data.weight, round: round }));
    dispatch(
      goToNextStep({
        nextNodeIndex: 3,
      })
    );
    reset();
  };
  return (
    <NodeContainerStyled>
      <Handle type="target" position={Position.Top} />
      <WeightCollectorFormStyled onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled>Weight:</LabelStyled>
        <input
          {...register("weight", {
            required: true,
            pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
          })}
        />
        {errors.weight && (
          <ErrorStyled>Please insert a valid number!</ErrorStyled>
        )}
        <input type="submit" disabled={flowStep !== 5} />
      </WeightCollectorFormStyled>
      <Handle type="source" position={Position.Right} style={{ top: 0 }} />
    </NodeContainerStyled>
  );
};

export default CollectWeightsComponent;
