import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

interface CollectWeightNodeComponentProps {
  onSubmit(): void;
}

const CollectWeightsComponent = (props: CollectWeightNodeComponentProps) => {
  const { onSubmit } = props;
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Wight:</label>
        <input id="text" name="text" />
        <button onClick={useCallback(onSubmit, [])}>Submit</button>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CollectWeightsComponent;
