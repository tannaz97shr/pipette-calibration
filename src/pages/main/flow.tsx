import { useState } from "react";
import { nodes, edges } from "./initial-elements";
import ReactFlow, { Background } from "react-flow-renderer";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";

const nodeTypes: any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const [currentNode, setCurrentNode] = useState(0);
  const { FlowchartContainer } = Styles;
  return (
    <FlowchartContainer>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background style={{ backgroundColor: "#red" }} />
      </ReactFlow>
    </FlowchartContainer>
  );
};

export default Flow;
