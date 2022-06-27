import { useState } from "react";
import ReactFlow from "react-flow-renderer";
import { useSelector, useDispatch } from 'react-redux'

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";
import { getNodes, getEdges } from "./initial-elements";
import type { RootState } from "../../store";
import {goToNextStep} from "../../features/steps/stepsSlice";

const nodeTypes: any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const { FlowchartContainer } = Styles;
  const dispatch = useDispatch();
  const {flowStep, recordsLoopStep} = useSelector((state:RootState) => state.steps)

  const myNodes = getNodes(flowStep, recordsLoopStep);
  const myEdges = getEdges(flowStep);

  return (
    <FlowchartContainer>
      {flowStep < myNodes.length && (
        <button onClick={() => dispatch(goToNextStep({
          nextNodeIndex: myNodes[flowStep].data.nextNode
        }))}>Go to next step</button>
      )}
      <ReactFlow nodes={myNodes} edges={myEdges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
