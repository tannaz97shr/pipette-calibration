import { Node, Edge, MarkerType } from "react-flow-renderer";

export const edges: Edge[] = [
  {
    id: "e0-1",
    source: "0",
    target: "1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle: "a",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    sourceHandle: "b",
    type: "smoothstep",
    label: "n > 5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
    targetHandle: "c",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    sourceHandle: "d",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export const getNodes = (activeNode: number, loopSteps:number): Node[] => {
  let newNodes: Node[] = [
  {
    id: "0",
    type: "input",
    position: { x: 350, y: 20 },
    data: {
      label: ["start"],
      nextNode: 1
    },
  },
  {
    id: "1",
    position: { x: 350, y: 100 },
    data: {
      label: [
        "Place a beaker with 1000 ul of distilled H2O",
        "Balance and Tare",
      ],
      nextNode: 2
    },
  },
  {
    id: "2",
    position: { x: 350, y: 200 },
    data: {
      label: ["Place a new pipette tip on the pipettor"],
      nextNode: 3
    },
  },
  {
    id: "3",
    position: { x: 350, y: 300 },
    type: "towTargetsNode",
    data: {
      label: [`Let's Weigh ${loopSteps} times`],
      nextNode: loopSteps > 0 ? 4 : 6
    },
    style: { border: "1px solid #1a192b" },
  },
  {
    id: "4",
    position: { x: 100, y: 350 },
    data: {
      label: ["Aspirate and dispense 100% of the volume into the beaker"],
      nextNode: 5
    },
  },
  {
    id: "5",
    position: { x: 80, y: 500 },
    type: "weightCollector",
    style: { border: "1px solid #1a192b" },
    data: {
      label: ["Enter Weight"],
      nextNode: 3
    },
  },
  {
    id: "6",
    position: { x: 500, y: 450 },
    type: "output",
    data: {
      label: ["Done!"],
    },
  },
];
  newNodes[activeNode] = {
    ...newNodes[activeNode],
    style: { border: "3px dashed #b91c1c" },
  };
  return newNodes;
};

export const getEdges = (activeNode: number): Edge[] => {
  let newEdges = [...edges];
  const index = newEdges.findIndex((item) => item.target === `${activeNode}`);
  newEdges[index] = { ...newEdges[index], animated: true };
  return newEdges;
};
