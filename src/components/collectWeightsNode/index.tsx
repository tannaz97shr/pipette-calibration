import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

interface CollectWeightNodeComponentProps {
  onSubmit(): void;
}

const handleStyle1 = { left: 20 };
const handleStyle2 = { right: 20 };

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
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle1}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle2}
      />
    </div>
  );
};

export default CollectWeightsComponent;