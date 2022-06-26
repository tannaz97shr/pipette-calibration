import { Handle, Position } from "react-flow-renderer";

import Styles from "../../assets/styles/NodeStyles";

const handleStyleC = { left: 30 };

interface TowTargetsNodeProps {
  data: { label: string[] };
}

const TowTargetsNode = (props: TowTargetsNodeProps) => {
  const { NodeContainerStyled } = Styles;
  return (
    <NodeContainerStyled>
      <Handle id="a" position={Position.Top} type="target" />
      <Handle id="b" position={Position.Left} type="source" />
      <div>
        {props.data.label.length ? props.data.label.map((label) => label) : ""}
      </div>
      <Handle
        id="c"
        position={Position.Bottom}
        type="target"
        style={handleStyleC}
      />
      <Handle id="d" position={Position.Bottom} type="source" />
    </NodeContainerStyled>
  );
};

export default TowTargetsNode;
