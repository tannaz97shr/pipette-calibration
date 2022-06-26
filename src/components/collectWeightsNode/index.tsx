import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

import Styles from "../../assets/styles/NodeStyles";
import { WeightCollectorFormStyled } from "./styled";

interface CollectWeightNodeComponentProps {
  onSubmit(): void;
}

const CollectWeightsComponent = (props: CollectWeightNodeComponentProps) => {
  const { NodeContainerStyled } = Styles;
  const { onSubmit } = props;
  return (
    <NodeContainerStyled>
      <Handle type="target" position={Position.Top} />
      <WeightCollectorFormStyled onSubmit={useCallback(onSubmit, [])}>
        <label htmlFor="text">Wight:</label>
        <input id="weight" name="number" />
        <input type="submit" />
      </WeightCollectorFormStyled>
      <Handle type="source" position={Position.Right} style={{ top: 0 }} />
    </NodeContainerStyled>
  );
};

export default CollectWeightsComponent;
