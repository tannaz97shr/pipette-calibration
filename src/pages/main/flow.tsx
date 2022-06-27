import { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";
import { getNodes, getEdges } from "./initial-elements";
import type { RootState } from "../../store";
import { goToNextStep } from "../../features/steps/stepsSlice";

const nodeTypes: any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const { FlowchartContainer, NextStepButtonStyled } = Styles;
  const dispatch = useDispatch();
  const { flowStep, recordsLoopStep } = useSelector(
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
  return (
    <FlowchartContainer>
      {flowStep < myNodes.length && flowStep !== 5 && (
        <NextStepButtonStyled onClick={onNextStepClicked}>
          Go to next step
        </NextStepButtonStyled>
      )}
      <ReactFlow nodes={myNodes} edges={myEdges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
