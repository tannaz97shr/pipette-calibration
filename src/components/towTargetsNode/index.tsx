import { Handle, Position } from "react-flow-renderer";

const handleStyle1 = { left: 20 };
const handleStyle2 = { right: 20 };

interface TowTargetsNodeProps {
  data: { label: string[] };
}

const TowTargetsNode = (props: TowTargetsNodeProps) => (
  <>
    <Handle type="target" position={Position.Top} />
    <div>
      {props.data.label.length ? props.data.label.map((label) => label) : ""}
    </div>
    <Handle
      type="source"
      position={Position.Bottom}
      id="a"
      style={handleStyle2}
    />
    <Handle
      type="source"
      position={Position.Bottom}
      id="b"
      style={handleStyle2}
    />
  </>
);

export default TowTargetsNode