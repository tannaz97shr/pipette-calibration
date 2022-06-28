import { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";
import { getNodes, getEdges } from "./initial-elements";
import { RootState } from "../../store";
import {
  goToNextStep,
  resetRound,
  nextRound,
} from "../../features/steps/stepsSlice";
import {
  removeRoundRecords,
  calculateData,
} from "../../features/weights/weightsSlice";

const nodeTypes: any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const { FlowchartContainer, NextStepButtonStyled, ControllerStyled } = Styles;
  const dispatch = useDispatch();
  const { flowStep, recordsLoopStep, round } = useSelector(
    (state: RootState) => state.steps
  );

  const { calculatedData } = useSelector((state: RootState) => state.weights);

  const myNodes = getNodes(flowStep, recordsLoopStep);
  const myEdges = getEdges(flowStep);

  const onNextStepClicked = () => {
    dispatch(
      goToNextStep({
        nextNodeIndex: myNodes[flowStep].data.nextNode,
      })
    );
  };
  const resetRoundClicked = () => {
    dispatch(resetRound());
    dispatch(removeRoundRecords({ round: round }));
  };
  const goToNextRound = () => {
    dispatch(nextRound());
  };
  useEffect(() => {
    if (flowStep === 6 && !calculatedData[round - 1]) {
      dispatch(calculateData({ round: round }));
    }
  }, [flowStep]);
  return (
    <FlowchartContainer>
      <ControllerStyled>
        <NextStepButtonStyled onClick={resetRoundClicked}>
          Reset Round
        </NextStepButtonStyled>
        {flowStep < myNodes.length && flowStep !== 5 && flowStep !== 6 && (
          <NextStepButtonStyled onClick={onNextStepClicked}>
            Go to next step
          </NextStepButtonStyled>
        )}
        {flowStep === 5 && "Please Fill The Form"}
        {flowStep == 6 && (
          <NextStepButtonStyled onClick={goToNextRound}>
            Next Round
          </NextStepButtonStyled>
        )}
      </ControllerStyled>

      <ReactFlow nodes={myNodes} edges={myEdges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
