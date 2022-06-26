import { Node, Edge } from "react-flow-renderer";

import CollectWeightNode from "../../components/collectWeightsNode";
import TowTargetsNode from "../../components/towTargetsNode";

export let weightTimes = 5;

const nodeTypes = {
  weightCollector: CollectWeightNode,
  towTargetsNode: TowTargetsNode,
};

export const nodes: Node[] = [
  {
    id: "0",
    type: "input",
    position: { x: 250, y: 0 },
    data: {
      label: ["start"],
    },
  },
  {
    id: "1",
    position: { x: 250, y: 50 },
    data: {
      label: [
        "Place a beaker with 1000 ul of distilled H2O",
        "Balance and Tare",
      ],
    },
  },
  {
    id: "2",
    position: { x: 250, y: 100 },
    data: {
      label: ["Place a new pipette tip on the pipettor"],
    },
  },
  {
    // it must have 2 handles
    id: "3",
    position: { x: 250, y: 150 },
    type: "towTargetsNode",
    data: {
      label: [`Let's Weigh ${weightTimes} times`],
    },
  },
  {
    id: "4",
    position: { x: 0, y: 200 },
    data: {
      label: ["Aspirate and dispense 100% of the volume into the beaker"],
    },
  },
  {
    // it must have 1 handle
    id: "5",
    position: { x: 0, y: 250 },
    type: "weightCollector",
    data: {
      label: ["Enter Weight"],
    },
  },
  {
    id: "6",
    position: { x: 500, y: 250 },
    data: {
      labe: ["Done!", "Now Check The Table To See The Results"],
    },
  },
];

export const edges: Edge[] = [
  {
    id: "e0-1",
    source: "0",
    target: "1",
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    sourceHandle: "a",
  },
  {
    id: "e4-5",
    source: "3",
    target: "4",
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    sourceHandle: "b",
  },
];
