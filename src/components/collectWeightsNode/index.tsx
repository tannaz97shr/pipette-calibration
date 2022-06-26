import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

import Styles from "../../assets/styles/NodeStyles";

interface CollectWeightNodeComponentProps {
  onSubmit(): void;
}

const CollectWeightsComponent = (props: CollectWeightNodeComponentProps) => {
  const { NodeContainerStyled } = Styles;
  const { onSubmit } = props;
  return (
    <NodeContainerStyled>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Wight:</label>
        <input id="text" name="text" />
        <button onClick={useCallback(onSubmit, [])}>Submit</button>
      </div>
      <Handle type="source" position={Position.Right} style={{top:0}} />
    </NodeContainerStyled>
  );
};

export default CollectWeightsComponent;
