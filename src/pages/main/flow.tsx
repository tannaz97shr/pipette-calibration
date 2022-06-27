import { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";
import { getNodes, getEdges } from "./initial-elements";
import { RootState } from "../../store";
import { goToNextStep, resetRound } from "../../features/steps/stepsSlice";

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
  };

  return (
    <FlowchartContainer>
      <ControllerStyled>
        <NextStepButtonStyled onClick={resetRoundClicked}>
          Reset Round
        </NextStepButtonStyled>
        {flowStep < myNodes.length && flowStep !== 5 ? (
          <NextStepButtonStyled onClick={onNextStepClicked}>
            Go to next step
          </NextStepButtonStyled>
        ): "Fill The Form Please"}
      </ControllerStyled>

      <ReactFlow nodes={myNodes} edges={myEdges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
