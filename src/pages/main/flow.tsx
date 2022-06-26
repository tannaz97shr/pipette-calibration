import { useState } from "react";
import ReactFlow, { Background } from "react-flow-renderer";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";
import { edges, getNodes, getEdges } from "./initial-elements";

const nodeTypes: any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const [currentNode, setCurrentNode] = useState<number>(0);
  const [loopSteps, setLoopSteps] = useState<number>(5);
  const { FlowchartContainer } = Styles;
  const myNodes = getNodes(currentNode, loopSteps);
  const myEdges = getEdges(currentNode);
  const gotToNextNode = () => {
    if (currentNode === 3 && loopSteps > 0) setLoopSteps(loopSteps - 1);
    setCurrentNode(myNodes[currentNode].data.nextNode);
  };
  return (
    <FlowchartContainer>
      {currentNode < myNodes.length && (
        <button onClick={gotToNextNode}>Go to next step</button>
      )}
      <ReactFlow nodes={myNodes} edges={myEdges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
