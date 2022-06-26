import { useMemo } from "react";
import { nodes, edges } from "./initial-elements";
import ReactFlow from "react-flow-renderer";

import Styles from "./styled";
import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";

const nodeTypes:any = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

const Flow = () => {
  const { FlowchartContainer } = Styles;
  return (
    <FlowchartContainer>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </FlowchartContainer>
  );
};

export default Flow;
